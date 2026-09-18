import { ArrowList, Card, Eyebrow, Frame, Label, NumberedList, RuledList, Section, SectionHead, StepTracker, Tags } from '../ui/Primitives';
import Tabs from './Tabs';

const Stack = ({ gap = 40, children, style }) => <div className="stack" style={{ '--stack-gap': `${gap}px`, ...style }}>{children}</div>;

export function NarrativeList({ s }) {
  return (
    <Section>
      <div className="split">
        <Stack gap={18}><Eyebrow>{s.eyebrow}</Eyebrow><h2>{s.title}</h2><p className="lede">{s.text}</p></Stack>
        <RuledList items={s.items} />
      </div>
    </Section>
  );
}

export function Cards({ s }) {
  return (
    <Stack gap={32}>
      {(s.eyebrow || s.title) && (s.text ? <SectionHead eyebrow={s.eyebrow} title={s.title} text={s.text} /> : <Stack gap={14}><Eyebrow>{s.eyebrow}</Eyebrow>{s.title && <h2>{s.title}</h2>}</Stack>)}
      <div className={`grid grid--${s.cols || 3}`}>
        {s.cards.map((c) => <Card key={c.title} label={c.label} title={c.title} text={c.text} />)}
      </div>
    </Stack>
  );
}

export function Quotes({ s }) {
  return (
    <div className="split split--4-8">
      <Stack gap={14}>
        <Eyebrow>{s.eyebrow}</Eyebrow><h3>{s.title}</h3><p className="body">{s.text}</p>
        {s.tags && <div style={{ paddingTop: 6 }}><Tags items={s.tags} /></div>}
      </Stack>
      <div className="grid grid--2">
        {s.groups.map((g) => (
          <div key={g.label} className="card" style={{ gap: 18 }}>
            <Label tone="down">{g.label}</Label>
            {g.quotes.map((q) => <blockquote key={q} className="quote" style={{ margin: 0 }}>"{q}"</blockquote>)}
          </div>
        ))}
      </div>
    </div>
  );
}

export function SplitImages({ s }) {
  return (
    <Section>
      <Stack gap={64}>
        <SectionHead eyebrow={s.eyebrow} title={s.title} text={s.text} />
        {s.parts.map((p) => {
          const text = (
            <Stack gap={16} style={{ paddingTop: 8 }}>
              <Label>{p.label}</Label><h3>{p.title}</h3><p className="body">{p.text}</p>
              <div style={{ paddingTop: 6 }}><ArrowList items={p.points} /></div>
            </Stack>
          );
          const img = <Frame image={p.image} label={p.imageLabel} height={420} />;
          return p.imageSide === 'left'
            ? <div key={p.title} className="split split--8-4">{img}{text}</div>
            : <div key={p.title} className="split split--4-8">{text}{img}</div>;
        })}
      </Stack>
    </Section>
  );
}

export function TabsBlock({ s }) {
  return (
    <Section>
      <Stack gap={40}>
        <Stack gap={14}><Eyebrow>{s.eyebrow}</Eyebrow><h2>{s.title}</h2></Stack>
        <Tabs tabs={s.tabs} />
        {s.callout && (
          <div className="card card--alt" style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: 20, alignItems: 'start' }}>
            <Label>{s.callout.label}</Label>
            <Stack gap={6}><div className="card__title" style={{ fontSize: '1.25rem' }}>{s.callout.title}</div><p className="body body--sm">{s.callout.text}</p></Stack>
          </div>
        )}
      </Stack>
    </Section>
  );
}

export function Numbered({ s }) {
  return (
    <Section alt={s.alt} size="sm">
      <div className="split split--4-8">
        <Stack gap={14}><Eyebrow>{s.eyebrow}</Eyebrow><h2>{s.title}</h2></Stack>
        <NumberedList items={s.items} />
      </div>
    </Section>
  );
}

export const Metric = ({ m }) => (
  <div className="metric">
    <div className="metric__num" style={{ color: m.tone === 'down' ? 'var(--down)' : m.tone === 'up' ? 'var(--up)' : 'var(--ink)' }}>{m.value}</div>
    <Label>{m.label}</Label>
    {m.text && <div className="body body--sm" style={{ fontSize: '.8125rem' }}>{m.text}</div>}
  </div>
);

export function Metrics({ s }) {
  return (
    <Section>
      <Stack gap={40}>
        <SectionHead eyebrow={s.eyebrow} title={s.title} text={s.text} />
        <div className="grid grid--4">{s.metrics.map((m) => <Metric key={m.label} m={m} />)}</div>
        {s.also && <div className="grid grid--2">{s.also.map((a) => <div key={a.label} className="card card--flat" style={{ gap: 12 }}><Label>{a.label}</Label><div style={{ fontSize: '.9375rem', lineHeight: 1.6 }}>{a.text}</div></div>)}</div>}
      </Stack>
    </Section>
  );
}

export function Research({ s }) {
  return (
    <Section>
      <Stack gap={40}>
        <SectionHead eyebrow={s.eyebrow} title={s.title} text={s.text} />
        <div className="grid grid--3">
          {s.people.map((p) => (
            <div key={p.who} className="card">
              <Label>{p.who}</Label>
              <blockquote className="quote" style={{ margin: 0 }}>"{p.quote}"</blockquote>
              <div style={{ fontSize: '.8125rem', color: 'var(--caption)' }}>{p.need}</div>
            </div>
          ))}
        </div>
        <div className="card card--alt" style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: 20, alignItems: 'start' }}>
          <Label>Insight</Label>
          <div className="card__title" style={{ lineHeight: 1.35 }}>{s.insight}</div>
        </div>
      </Stack>
    </Section>
  );
}

export function Persona({ s }) {
  const p = s.persona;
  return (
    <Section alt size="sm">
      <Stack gap={40}>
        <SectionHead eyebrow={s.eyebrow} title={s.title} text={s.text} />
        <Tags items={s.pains} />
        <div className="split">
          <div className="card card--alt" style={{ padding: 32 }}>
            <Label>Primary persona</Label>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.125rem', fontWeight: 600, lineHeight: 1.05 }}>{p.name}</div>
            <div className="body body--sm">{p.role}</div>
            <div className="stack" style={{ '--stack-gap': '10px', paddingTop: 10, borderTop: '1px solid var(--border)', fontSize: '.875rem' }}>
              <div><span style={{ color: 'var(--caption)' }}>Goals — </span>{p.goals}</div>
              <div><span style={{ color: 'var(--caption)' }}>Frustrations — </span>{p.frustrations}</div>
            </div>
          </div>
          <div className="card" style={{ padding: 32 }}><Label>Scenario</Label><p style={{ lineHeight: 1.65 }}>{s.scenario}</p></div>
        </div>
      </Stack>
    </Section>
  );
}

export function Journey({ s }) {
  const cols = ['Stage', 'What the user does', 'Feeling', 'Opportunity'];
  return (
    <Section>
      <Stack gap={40}>
        <SectionHead eyebrow={s.eyebrow} title={s.title} text={s.text} />
        <div className="jtable" role="table" aria-label="User journey map">
          <div className="jtable__head" role="row">{cols.map((c) => <div key={c} className="label" role="columnheader">{c}</div>)}</div>
          {s.rows.map((r) => (
            <div key={r[0]} className="jtable__row" role="row">
              <div className="jtable__stage" role="cell" data-col={cols[0]}>{r[0]}</div>
              <div className="body body--sm" role="cell" data-col={cols[1]}>{r[1]}</div>
              <div className="jtable__feel" role="cell" data-col={cols[2]}>{r[2]}</div>
              <div style={{ fontSize: '.9375rem', lineHeight: 1.5 }} role="cell" data-col={cols[3]}>{r[3]}</div>
            </div>
          ))}
        </div>
      </Stack>
    </Section>
  );
}

export function Structure({ s }) {
  const t = s.tree;
  return (
    <Section>
      <Stack gap={56}>
        <SectionHead eyebrow={s.eyebrow} title={s.title} text={s.text} />
        <div className="tree" role="img" aria-label="Information architecture: Welcome, Main menu, then Report, Your activities, Rewards, Events and Articles">
          {t.roots.map((r, i) => (<div key={r} style={{ display: 'contents' }}><div className="tree__root">{r}</div>{i < t.roots.length - 1 && <div className="tree__stem" />}</div>))}
          <div className="tree__stem" />
          <div className="tree__branches">
            {t.branches.map((b) => (
              <div key={b.node} className="tree__branch"><div className="tree__node">{b.node}</div>{b.leaves.map((l) => <div key={l} className="tree__leaf">{l}</div>)}</div>
            ))}
          </div>
        </div>
        <div className="grid grid--2">
          {s.gallery.map((g) => <Stack key={g.label} gap={14}><Label>{g.label}</Label><Frame image={g.image} label={g.imageLabel} height={g.h} /></Stack>)}
        </div>
      </Stack>
    </Section>
  );
}

export function TwoLists({ s }) {
  return (
    <Section alt size="sm">
      <div className="grid grid--2" style={{ gap: 'clamp(28px, 4.4vw, 64px)' }}>
        <Stack gap={24}><Eyebrow>{s.left.eyebrow}</Eyebrow><h2 style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)' }}>{s.left.title}</h2><RuledList items={s.left.items} tone="accent" /></Stack>
        <Stack gap={24}><Eyebrow>{s.right.eyebrow}</Eyebrow><h2 style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)' }}>{s.right.title}</h2><NumberedList items={s.right.items} /></Stack>
      </div>
    </Section>
  );
}

export function SolutionHub({ s }) {
  return (
    <Section>
      <Stack gap={48}>
        <SectionHead eyebrow={s.eyebrow} title={s.title} text={s.text} />
        <div className="grid grid--5" style={{ gap: 16 }}>
          {s.tiles.map(([a, b]) => <div key={a} className="card" style={{ gap: 6, padding: 20 }}><div className="card__title" style={{ fontSize: '1.125rem' }}>{a}</div><div className="body body--sm" style={{ fontSize: '.8125rem' }}>{b}</div></div>)}
        </div>
        <div className="split split--4-8">
          <Stack gap={16}>
            <Label>Key features</Label><h3>{s.featuresTitle}</h3>
            <ol className="ruled" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {s.features.map((f, i) => <li key={f} className="ruled__row" style={{ gridTemplateColumns: '32px 1fr', padding: '14px 0' }}><span className="ruled__num">{String(i + 1).padStart(2, '0')}</span><span className="ruled__text ruled__text--ink" style={{ fontSize: '.9375rem' }}>{f}</span></li>)}
            </ol>
          </Stack>
          <Stack gap={14}><Label>Admin dashboard</Label><Frame image={s.image} label={s.imageLabel} height={520} /></Stack>
        </div>
      </Stack>
    </Section>
  );
}

export function Steps({ s }) {
  return (
    <Section alt size="sm">
      <Stack gap={48}>
        <SectionHead eyebrow={s.eyebrow} title={s.title} text={s.text} />
        {s.tracks.map((t) => <StepTracker key={t.label} label={t.label} steps={t.steps} />)}
      </Stack>
    </Section>
  );
}

export function DecisionsImpact({ s }) {
  return (
    <Section>
      <div className="split split--rev">
        <Stack gap={24}><Eyebrow>{s.left.eyebrow}</Eyebrow><h2 style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)' }}>{s.left.title}</h2><NumberedList items={s.left.items} /></Stack>
        <Stack gap={24}>
          <Eyebrow>{s.right.eyebrow}</Eyebrow><h2 style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)' }}>{s.right.title}</h2>
          <p className="body body--sm">{s.right.text}</p>
          <div className="grid grid--2" style={{ gap: 16 }}>{s.right.metrics.map((m) => <Metric key={m.label} m={m} />)}</div>
        </Stack>
      </div>
    </Section>
  );
}

export function ArrowListBlock({ s }) {
  return (
    <Section alt size="sm">
      <Stack gap={28}>
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <div className="grid grid--2" style={{ gap: 12 }}>{s.items.map((t) => <div key={t} className="arrow-list__item" style={{ padding: '14px 20px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)' }}>{t}</div>)}</div>
      </Stack>
    </Section>
  );
}
