import { useEffect, useRef, useState } from 'react';
import './NodePortrait.css';

/**
 * Interactive stippled-node portrait for the home hero.
 *
 * Renders a canvas that fills its positioned parent (your `section.hero`).
 * It listens on the window, so it still reacts when the cursor is over the
 * headline, and it has pointer-events: none, so links stay clickable.
 *
 * The 0.5 MB mesh is loaded with a dynamic import, so Vite splits it into its
 * own chunk and the rest of the page doesn't wait for it.
 *
 * Colours come from CSS custom properties (see NodePortrait.css), so the
 * light/dark theme toggle is picked up automatically.
 */
export default function NodePortrait({
  align = 'right',      // 'left' | 'center' | 'right'
  fill = 0.95,          // portrait height as a share of the hero height
  offsetX = -0.06,      // nudge as a share of hero width (negative = move left)
  radius = 80,          // cursor influence radius, in portrait units (600 wide)
  force = 2.6,          // push/pull strength
  attract = false,      // true = nodes are pulled toward the cursor
  spring = 0.075,
  damping = 0.84,
  dotRadius = 0.72,
  lineAlpha = 0.05,     // connector opacity, kept well below the dots
  intro = true,
  className = '',
}) {
  const canvasRef = useRef(null);
  const dark = useIsDark();

  useEffect(() => {
    let cancelled = false;
    let cleanup = () => {};

    // Two meshes: in light mode dots cluster where the sketch is dark;
    // in dark mode they cluster where it is light, so light dots on a dark
    // page still read as a positive image. Each loads only when needed.
    const load = dark
      ? import('./node-portrait-mesh-dark.json')
      : import('./node-portrait-mesh.json');

    load.then(({ default: mesh }) => {
      if (cancelled || !canvasRef.current) return;
      cleanup = start(canvasRef.current, mesh, {
        align, fill, offsetX, radius, force, attract, spring, damping, dotRadius, lineAlpha, intro,
      });
    });

    return () => { cancelled = true; cleanup(); };
  }, [dark, align, fill, offsetX, radius, force, attract, spring, damping, dotRadius, lineAlpha, intro]);

  return <canvas ref={canvasRef} className={`node-portrait ${className}`} aria-hidden="true" />;
}

/** True when <html data-theme="dark">, or the OS is dark and no theme is set. Updates live. */
function useIsDark() {
  const read = () => {
    const t = document.documentElement.getAttribute('data-theme');
    if (t) return t === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };
  const [dark, setDark] = useState(read);
  useEffect(() => {
    const update = () => setDark(read());
    const mo = new MutationObserver(update);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', update);
    return () => { mo.disconnect(); mq.removeEventListener('change', update); };
  }, []);
  return dark;
}

function start(cv, mesh, o) {
  const ctx = cv.getContext('2d');
  const W = mesh.w, H = mesh.h, N = mesh.n.length / 2, E = mesh.e;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const hx = new Float32Array(N), hy = new Float32Array(N);
  for (let i = 0; i < N; i++) { hx[i] = mesh.n[2 * i]; hy[i] = mesh.n[2 * i + 1]; }
  const x = new Float32Array(N), y = new Float32Array(N);
  const vx = new Float32Array(N), vy = new Float32Array(N);
  const heat = new Float32Array(N), phase = new Float32Array(N);
  for (let i = 0; i < N; i++) phase[i] = Math.random() * Math.PI * 2;

  // ---- layout: fit the portrait into the canvas, anchored to the bottom
  let dpr = 1, s = 1, ox = 0, oy = 0, rect = cv.getBoundingClientRect();
  const layout = () => {
    rect = cv.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = Math.max(1, Math.round(rect.width * dpr));
    cv.height = Math.max(1, Math.round(rect.height * dpr));
    s = Math.min((rect.height * o.fill) / H, (rect.width * 0.95) / W);
    const pw = W * s;
    ox = o.align === 'left' ? 0 : o.align === 'center' ? (rect.width - pw) / 2 : rect.width - pw;
    ox += o.offsetX * rect.width;
    oy = rect.height - H * s;
  };
  const ro = new ResizeObserver(layout);
  ro.observe(cv);
  layout();

  // ---- theme colours from CSS variables
  let ink = [27, 31, 25], acc = [63, 107, 58];
  const probe = document.createElement('canvas').getContext('2d');
  const parse = (v, fb) => {
    v = v.trim();
    if (!v) return fb;
    probe.fillStyle = '#000';
    probe.fillStyle = v;
    const hex = probe.fillStyle; // normalises any CSS colour to #rrggbb
    if (!hex.startsWith('#')) return fb;
    const n = parseInt(hex.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  };
  const readColors = () => {
    const cs = getComputedStyle(cv);
    ink = parse(cs.getPropertyValue('--portrait-ink'), ink);
    acc = parse(cs.getPropertyValue('--portrait-accent'), acc);
  };
  readColors();
  const mo = new MutationObserver(readColors);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'class'] });
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  mq.addEventListener('change', readColors);
  const rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

  // ---- intro: nodes fly in from scattered positions
  let startT = performance.now();
  for (let i = 0; i < N; i++) {
    if (reduce || !o.intro) { x[i] = hx[i]; y[i] = hy[i]; continue; }
    const a = Math.random() * Math.PI * 2, d = 200 + Math.random() * 500;
    x[i] = W / 2 + Math.cos(a) * d; y[i] = H / 2 + Math.sin(a) * d;
  }
  if (reduce || !o.intro) startT -= 5000;

  // ---- pointer (window-level, so hero text on top doesn't block it)
  let mx = -1e4, my = -1e4, active = false;
  const onMove = (e) => {
    const px = e.clientX - rect.left, py = e.clientY - rect.top;
    active = px >= 0 && py >= 0 && px <= rect.width && py <= rect.height;
    mx = (px - ox) / s; my = (py - oy) / s;
  };
  const onLeave = () => { active = false; };
  const onScroll = () => { rect = cv.getBoundingClientRect(); };
  window.addEventListener('pointermove', onMove, { passive: true });
  window.addEventListener('pointerdown', onMove, { passive: true });
  document.addEventListener('pointerleave', onLeave);
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---- pause when the hero is off-screen or hidden (e.g. display:none on phones)
  let visible = true;
  const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; });
  io.observe(cv);

  const R2 = o.radius * o.radius;
  let raf;
  const frame = (t) => {
    raf = requestAnimationFrame(frame);
    if (!visible) return;
    const time = t / 1000;
    const k = Math.min(1, (t - startT) / 1600);
    const sp = o.spring * (0.35 + 0.65 * k);

    for (let i = 0; i < N; i++) {
      let tx = hx[i], ty = hy[i];
      if (!reduce && k >= 1) {
        tx += Math.sin(time * 0.9 + phase[i]) * 0.9;
        ty += Math.cos(time * 0.7 + phase[i] * 1.3) * 0.9;
      }
      vx[i] += (tx - x[i]) * sp; vy[i] += (ty - y[i]) * sp;
      let h = 0;
      if (active) {
        const dx = x[i] - mx, dy = y[i] - my, d2 = dx * dx + dy * dy;
        if (d2 < R2) {
          const d = Math.sqrt(d2) || 1, f = 1 - d / o.radius;
          const kk = f * f * o.force * (o.attract ? -0.6 : 1);
          vx[i] += (dx / d) * kk; vy[i] += (dy / d) * kk; h = f;
        }
      }
      vx[i] *= o.damping; vy[i] *= o.damping;
      x[i] += vx[i]; y[i] += vy[i];
      heat[i] += (h - heat[i]) * 0.18;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.setTransform(dpr * s, 0, 0, dpr * s, dpr * ox, dpr * oy);
    const reveal = Math.min(1, Math.max(0, (t - startT - 700) / 1100));

    // connectors: one faint pass, plus the lit ones near the cursor
    const lines = new Path2D(), hot = new Path2D();
    for (let j = 0; j < E.length; j += 2) {
      const a = E[j], b = E[j + 1];
      const p = heat[a] + heat[b] > 0.25 ? hot : lines;
      p.moveTo(x[a], y[a]); p.lineTo(x[b], y[b]);
    }
    ctx.lineWidth = 0.35; ctx.strokeStyle = rgba(ink, o.lineAlpha * reveal); ctx.stroke(lines);
    ctx.lineWidth = 0.5; ctx.strokeStyle = rgba(acc, 0.45); ctx.stroke(hot);

    // resting dots
    const r0 = o.dotRadius;
    const dots = new Path2D();
    for (let i = 0; i < N; i++) {
      if (heat[i] > 0.05) continue;
      dots.moveTo(x[i] + r0, y[i]); dots.arc(x[i], y[i], r0, 0, Math.PI * 2);
    }
    ctx.fillStyle = rgba(ink, 0.88); ctx.fill(dots);

    // glowing dots, batched into three heat levels so the dense mesh stays fast
    const gp = [new Path2D(), new Path2D(), new Path2D()];
    for (let i = 0; i < N; i++) {
      const h = heat[i]; if (h <= 0.05) continue;
      const bi = Math.min(2, Math.floor(h * 3)), r = r0 * (1 + h * 1.6);
      gp[bi].moveTo(x[i] + r, y[i]); gp[bi].arc(x[i], y[i], r, 0, Math.PI * 2);
    }
    ctx.shadowColor = rgba(acc, 0.8);
    for (let bi = 0; bi < 3; bi++) {
      const h = (bi + 0.5) / 3;
      ctx.shadowBlur = 8 * h * dpr; ctx.fillStyle = rgba(acc, 0.55 + h * 0.45); ctx.fill(gp[bi]);
    }
    ctx.shadowBlur = 0;
  };
  raf = requestAnimationFrame(frame);

  return () => {
    cancelAnimationFrame(raf);
    ro.disconnect(); mo.disconnect(); io.disconnect();
    mq.removeEventListener('change', readColors);
    window.removeEventListener('pointermove', onMove);
    window.removeEventListener('pointerdown', onMove);
    document.removeEventListener('pointerleave', onLeave);
    window.removeEventListener('scroll', onScroll);
  };
}
