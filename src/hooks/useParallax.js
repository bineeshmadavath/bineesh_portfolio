import { useCallback, useEffect, useRef, useState } from 'react';

// Tracks the pointer inside an element as -0.5..0.5 offsets. Disabled for reduced-motion and coarse pointers.
export function useParallax() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const enabled = useRef(true);
  const frame = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    enabled.current = !reduce && !coarse;
    return () => { if (frame.current) cancelAnimationFrame(frame.current); };
  }, []);

  const onMove = useCallback((e) => {
    if (!enabled.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    const next = { x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 };
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => setPos(next));
  }, []);

  const onLeave = useCallback(() => setPos({ x: 0, y: 0 }), []);

  const layer = (kx, ky = kx) => ({ transform: `translate3d(${pos.x * kx}px, ${pos.y * ky}px, 0)` });

  return { onMove, onLeave, layer };
}
