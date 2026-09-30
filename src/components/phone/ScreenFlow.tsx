import React, { useLayoutEffect, useRef, useState } from 'react';

interface FlowItem {
  id: string;
  label: string;
  caption: string;
  node: React.ReactNode;
}

interface ScreenFlowProps {
  items: FlowItem[];
}

/**
 * Lays screens out in a responsive grid and draws a subtle connector from each
 * screen to the next. Connectors are measured from the DOM so they follow the
 * grid at any breakpoint: a straight line between neighbours on the same row,
 * and a routed path that drops into the row gap when the flow wraps.
 */
export default function ScreenFlow({ items }: ScreenFlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [paths, setPaths] = useState<string[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    const measure = () => {
      const c = containerRef.current;
      if (!c) return;
      const cr = c.getBoundingClientRect();
      const rects = nodeRefs.current.map((n) => n?.getBoundingClientRect());
      const out: string[] = [];
      const r = 14; // corner radius of routed paths
      const yFrac = 0.42; // where on the phone the line attaches

      for (let i = 0; i < rects.length - 1; i++) {
        const a = rects[i];
        const b = rects[i + 1];
        if (!a || !b) continue;
        const ax = a.right - cr.left;
        const ay = a.top - cr.top + a.height * yFrac;
        const bx = b.left - cr.left;
        const by = b.top - cr.top + b.height * yFrac;

        if (Math.abs(a.top - b.top) < 8) {
          out.push(`M ${ax} ${ay} L ${bx} ${by}`);
        } else {
          const gapY = (a.bottom - cr.top + (b.top - cr.top)) / 2;
          const outX = Math.min(cr.width - 2, ax + 18);
          const inX = Math.max(2, bx - 18);
          out.push(
            `M ${ax} ${ay} H ${outX - r} Q ${outX} ${ay} ${outX} ${ay + r} V ${gapY - r} Q ${outX} ${gapY} ${outX - r} ${gapY} ` +
              `H ${inX + r} Q ${inX} ${gapY} ${inX} ${gapY + r} V ${by - r} Q ${inX} ${by} ${inX + r} ${by} H ${bx}`,
          );
        }
      }
      setPaths(out);
      setSize({ w: cr.width, h: cr.height });
    };

    measure();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : null;
    if (ro && containerRef.current) ro.observe(containerRef.current);
    window.addEventListener('resize', measure);
    // Re-measure once images have had a chance to load and settle layout.
    const t = window.setTimeout(measure, 400);
    return () => {
      ro?.disconnect();
      window.removeEventListener('resize', measure);
      window.clearTimeout(t);
    };
  }, [items.length]);

  return (
    <div ref={containerRef} className="relative px-5 py-4">
      <svg className="absolute inset-0 pointer-events-none" width={size.w} height={size.h} aria-hidden="true">
        <defs>
          <marker id="flow-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#2E9E4F" fillOpacity="0.7" />
          </marker>
        </defs>
        {paths.map((d, i) => (
          <path key={i} d={d} fill="none" stroke="#2E9E4F" strokeOpacity="0.45" strokeWidth="1.5" strokeDasharray="3 4" strokeLinecap="round" markerEnd="url(#flow-arrow)" />
        ))}
      </svg>

      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
        {items.map((item, i) => (
          <figure key={item.id} className="flex flex-col gap-3">
            <div ref={(el) => { nodeRefs.current[i] = el; }} className="relative">
              <span className="absolute -top-3 -left-1 z-10 grid place-items-center w-6 h-6 rounded-full bg-brand text-white text-[10px] font-bold border-2 border-white">
                {String(i + 1).padStart(2, '0')}
              </span>
              {item.node}
            </div>
            <figcaption className="px-0.5">
              <h4 className="text-sm font-semibold text-ink">{item.label}</h4>
              <p className="text-xs text-ink-muted leading-relaxed">{item.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
