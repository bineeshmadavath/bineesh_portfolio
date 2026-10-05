/*!
 * portrait-bg.js — interactive 3D particle portrait background
 * No dependencies. Usage:
 *
 *   <script src="portrait-bg.js"></script>
 *   <script>
 *     PortraitBG({ image: 'me.jpg' });                       // full-page, fixed background
 *     PortraitBG({ image: 'me.jpg', container: '#hero' });   // only inside one section
 *   </script>
 *
 * Note: the image must be served from the same website (or a CORS-enabled host).
 * Opening the HTML by double-clicking (file://) blocks pixel reading in Chrome;
 * use a local server (e.g. VS Code "Live Server") or your live site.
 */
(function (global) {
  'use strict';

  var DEFAULTS = {
    image: null,          // path/URL to the photo, or an <img> / ImageBitmap
    container: null,      // element or selector; null = whole page (fixed)
    density: 140,         // dots across the portrait (performance vs detail)
    depth: 80,            // how far bright areas come forward
    repel: 90,            // mouse push strength
    radius: 110,          // mouse influence radius (px)
    dotSize: 2,           // base dot size (px)
    hideDark: 0.08,       // drop pixels darker than this (0 = keep all)
    hideLight: 1,         // drop pixels brighter than this (e.g. 0.92 removes white backgrounds)
    align: 'center',      // 'left' | 'center' | 'right' (centred automatically on narrow screens)
    scale: 0.82,          // portrait height as a fraction of the container height
    background: 'transparent', // canvas fill, e.g. '#07080c'
    opacity: 1,           // overall opacity of the effect
    tilt: true,           // turn toward the cursor
    assemble: true        // dots fly in when the portrait loads
  };

  function PortraitBG(userOpts) {
    var o = {}, k;
    for (k in DEFAULTS) o[k] = DEFAULTS[k];
    for (k in userOpts || {}) o[k] = userOpts[k];

    var host = typeof o.container === 'string' ? document.querySelector(o.container) : o.container;
    var fullPage = !host || host === document.body;
    if (fullPage) host = document.body;

    var reduced = global.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- Canvas ---------- */
    var canvas = document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    var s = canvas.style;
    s.position = fullPage ? 'fixed' : 'absolute';
    s.top = s.left = '0'; s.width = '100%'; s.height = '100%';
    s.zIndex = fullPage ? '-1' : '0';
    s.pointerEvents = 'none';
    s.opacity = o.opacity;
    if (!fullPage && getComputedStyle(host).position === 'static') host.style.position = 'relative';
    host.insertBefore(canvas, host.firstChild);
    var ctx = canvas.getContext('2d');

    var W = 0, H = 0, dpr = 1, source = null, n = 0;
    var hx, hy, hb, px, py, pz, vx, vy, vz, colors, rnd;

    function resize() {
      dpr = Math.min(global.devicePixelRatio || 1, 2);
      var r = canvas.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (source) build(source, false);
    }

    /* ---------- Image -> particles ---------- */
    function build(img, scatter) {
      source = img;
      var sw = img.naturalWidth || img.width, sh = img.naturalHeight || img.height;
      if (!sw || !sh || !W || !H) return;
      var cols = o.density, rows = Math.round(cols * sh / sw);
      var off = document.createElement('canvas');
      off.width = cols; off.height = rows;
      var octx = off.getContext('2d');
      octx.drawImage(img, 0, 0, cols, rows);
      var data;
      try { data = octx.getImageData(0, 0, cols, rows).data; }
      catch (e) {
        console.error('[PortraitBG] Cannot read image pixels. Serve the page and image from the same ' +
          'site (not file://), or host the image with CORS enabled.', e);
        return;
      }
      var spacing = Math.min((H * o.scale) / rows, (W * 0.8) / cols);
      var list = [];
      for (var y = 0; y < rows; y++) {
        for (var x = 0; x < cols; x++) {
          var i = (y * cols + x) * 4;
          if (data[i + 3] < 20) continue;
          var r = data[i], g = data[i + 1], b = data[i + 2];
          var lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          if (lum < o.hideDark || lum > o.hideLight) continue;
          list.push((x - cols / 2) * spacing, (y - rows / 2) * spacing, lum, 'rgb(' + r + ',' + g + ',' + b + ')');
        }
      }
      var keep = n && !scatter;   // on resize, keep current motion state if counts match
      var newN = list.length / 4;
      if (!keep || newN !== n) {
        n = newN;
        hx = new Float32Array(n); hy = new Float32Array(n); hb = new Float32Array(n);
        px = new Float32Array(n); py = new Float32Array(n); pz = new Float32Array(n);
        vx = new Float32Array(n); vy = new Float32Array(n); vz = new Float32Array(n);
        rnd = new Float32Array(n); colors = new Array(n);
        keep = false;
      }
      for (var j = 0; j < n; j++) {
        hx[j] = list[j * 4]; hy[j] = list[j * 4 + 1]; hb[j] = list[j * 4 + 2]; colors[j] = list[j * 4 + 3];
        if (!keep) {
          rnd[j] = Math.random() * Math.PI * 2;
          var spread = scatter && o.assemble && !reduced ? 400 : 0;
          px[j] = hx[j] + (Math.random() - 0.5) * spread;
          py[j] = hy[j] + (Math.random() - 0.5) * spread;
          pz[j] = (Math.random() - 0.5) * spread;
          vx[j] = vy[j] = vz[j] = 0;
        }
      }
    }

    function decode(src) {
      if (typeof src !== 'string') return Promise.resolve(src);
      return new Promise(function (res, rej) {
        var im = new Image();
        im.crossOrigin = 'anonymous';
        im.onload = function () { res(im); };
        im.onerror = function () { rej(new Error('Could not load image: ' + src)); };
        im.src = src;
      });
    }

    function setImage(src) {
      return decode(src).then(function (img) { build(img, true); })
        .catch(function (e) { console.error('[PortraitBG]', e.message); });
    }

    /* ---------- Mouse ---------- */
    var mx = -9999, my = -9999, mTarget = 0, mActive = 0, nx = 0, ny = 0, tiltX = 0, tiltY = 0;
    function onPointer(cx, cy) {
      var r = canvas.getBoundingClientRect();
      var inside = cx >= r.left && cx <= r.right && cy >= r.top && cy <= r.bottom;
      mx = cx - r.left; my = cy - r.top;
      mTarget = inside ? 1 : 0;
      nx = inside ? mx / W * 2 - 1 : 0;
      ny = inside ? my / H * 2 - 1 : 0;
    }
    function onMove(e) { onPointer(e.clientX, e.clientY); }
    function onTouch(e) { if (e.touches[0]) onPointer(e.touches[0].clientX, e.touches[0].clientY); }
    function onLeave() { mTarget = 0; nx = ny = 0; }
    global.addEventListener('pointermove', onMove, { passive: true });
    global.addEventListener('touchmove', onTouch, { passive: true });
    global.addEventListener('touchend', onLeave);
    document.addEventListener('pointerleave', onLeave);
    global.addEventListener('blur', onLeave);

    /* ---------- Pause when off-screen ---------- */
    var visible = true;
    var io = global.IntersectionObserver && new IntersectionObserver(function (es) { visible = es[0].isIntersecting; });
    if (io) io.observe(canvas);
    var ro = global.ResizeObserver ? new ResizeObserver(resize) : null;
    if (ro) ro.observe(canvas); else global.addEventListener('resize', resize);

    /* ---------- Render loop ---------- */
    var FOCAL = 900, raf = 0;
    function frame(t) {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      if (o.background === 'transparent') ctx.clearRect(0, 0, W, H);
      else { ctx.fillStyle = o.background; ctx.fillRect(0, 0, W, H); }
      if (!n) return;

      var time = t * 0.001, depth = o.depth, force = reduced ? 0 : o.repel, radius = o.radius, r2 = radius * radius;
      mActive += (mTarget - mActive) * 0.08;
      var tiltOn = o.tilt && !reduced;
      tiltY += ((tiltOn ? nx * 0.45 : 0) - tiltY) * 0.05;
      tiltX += ((tiltOn ? -ny * 0.3 : 0) - tiltX) * 0.05;
      var cy = Math.cos(tiltY), sy = Math.sin(tiltY), cx = Math.cos(tiltX), sx = Math.sin(tiltX);

      var align = W < 700 ? 'center' : o.align;
      var ox = align === 'left' ? W * 0.28 : align === 'right' ? W * 0.72 : W / 2;
      var oy = H / 2, mlx = mx - ox, mly = my - oy;
      var breathe = reduced ? 0 : 1.5;

      for (var k = 0; k < n; k++) {
        var tz = hb[k] * depth + Math.sin(time * 1.3 + rnd[k]) * breathe;
        vx[k] += (hx[k] - px[k]) * 0.05;
        vy[k] += (hy[k] - py[k]) * 0.05;
        vz[k] += (tz - pz[k]) * 0.05;
        if (mActive > 0.01 && force) {
          var dx = px[k] - mlx, dy = py[k] - mly, d2 = dx * dx + dy * dy;
          if (d2 < r2) {
            var d = Math.sqrt(d2) || 1, f = (1 - d / radius) * force * 0.08 * mActive;
            vx[k] += dx / d * f; vy[k] += dy / d * f; vz[k] += f * 1.2;
          }
        }
        vx[k] *= 0.82; vy[k] *= 0.82; vz[k] *= 0.82;
        px[k] += vx[k]; py[k] += vy[k]; pz[k] += vz[k];

        var x1 = px[k] * cy + pz[k] * sy, z1 = -px[k] * sy + pz[k] * cy;
        var y2 = py[k] * cx - z1 * sx, z2 = py[k] * sx + z1 * cx;
        var sc = FOCAL / (FOCAL - z2), sz = o.dotSize * sc * (0.6 + hb[k] * 0.7);
        ctx.fillStyle = colors[k];
        ctx.fillRect(ox + x1 * sc - sz / 2, oy + y2 * sc - sz / 2, sz, sz);
      }
    }

    resize();
    raf = requestAnimationFrame(frame);
    if (o.image) setImage(o.image);

    return {
      setImage: setImage,
      set: function (opts) {                       // change options live
        var rebuild = false;
        for (var key in opts) {
          if (/^(density|hideDark|hideLight|scale)$/.test(key)) rebuild = true;
          o[key] = opts[key];
        }
        canvas.style.opacity = o.opacity;
        if (rebuild && source) build(source, false);
      },
      destroy: function () {
        cancelAnimationFrame(raf);
        global.removeEventListener('pointermove', onMove);
        global.removeEventListener('touchmove', onTouch);
        global.removeEventListener('touchend', onLeave);
        document.removeEventListener('pointerleave', onLeave);
        global.removeEventListener('blur', onLeave);
        if (io) io.disconnect();
        if (ro) ro.disconnect(); else global.removeEventListener('resize', resize);
        canvas.remove();
      }
    };
  }

  global.PortraitBG = PortraitBG;
})(window);
