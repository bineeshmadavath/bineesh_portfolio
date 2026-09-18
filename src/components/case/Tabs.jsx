import { useId, useRef, useState } from 'react';
import { ArrowList, Eyebrow, Frame, Label } from '../ui/Primitives';

/** Accessible tab set (roving arrow keys) for the "three tabs, one pattern" block. */
export default function Tabs({ tabs }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const refs = useRef([]);

  const onKey = (e, i) => {
    const n = tabs.length;
    let next = null;
    if (e.key === 'ArrowRight') next = (i + 1) % n;
    if (e.key === 'ArrowLeft') next = (i - 1 + n) % n;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = n - 1;
    if (next !== null) { e.preventDefault(); setActive(next); refs.current[next]?.focus(); }
  };

  const t = tabs[active];
  return (
    <div>
      <div role="tablist" aria-label="Screens" className="tabs__list">
        {tabs.map((tab, i) => (
          <button key={tab.id} ref={(el) => (refs.current[i] = el)} role="tab" id={`${id}-tab-${tab.id}`} aria-selected={i === active} aria-controls={`${id}-panel-${tab.id}`} tabIndex={i === active ? 0 : -1} className="tab" onClick={() => setActive(i)} onKeyDown={(e) => onKey(e, i)}>
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" id={`${id}-panel-${t.id}`} aria-labelledby={`${id}-tab-${t.id}`} className="tabpanel">
        <div className="split split--8-4">
          <Frame image={t.image} label={t.imageLabel} height={380} />
          <div className="stack" style={{ '--stack-gap': '14px' }}>
            <Label tone="accent">{t.label}</Label>
            <h3>{t.title}</h3>
            <ArrowList items={t.points} />
          </div>
        </div>
      </div>
    </div>
  );
}
