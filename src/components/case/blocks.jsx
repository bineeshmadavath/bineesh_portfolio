import { ArrowList, Card, Eyebrow, Frame, Label, NumberedList, RuledList, Section, SectionHead, Tags } from '../ui/Primitives';
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
          return <div key={p.title} className="split split--4-8">{text}{img}</div>;
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
  const isArrayGoals = Array.isArray(s.goals);
  const isArrayFrustrations = Array.isArray(s.frustrations);
  return (
    <Section alt size="sm">
      <Stack gap={40}>
        {(s.eyebrow || s.title) && <Stack gap={14}>{s.eyebrow && <Eyebrow>{s.eyebrow}</Eyebrow>}{s.title && <h2>{s.title}</h2>}</Stack>}
        <div className="split">
          <div className="card card--alt" style={{ padding: 32 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.125rem', fontWeight: 600, lineHeight: 1.05 }}>{p.name}</div>
            <div className="body body--sm">{p.role}</div>
            {p.location && <div className="body body--sm" style={{ fontSize: '.875rem', color: 'var(--caption)', paddingTop: 8 }}>📍 {p.location}</div>}
            {p.quote && <blockquote className="quote" style={{ margin: '16px 0 0 0', paddingTop: 16, borderTop: '1px solid var(--border)' }}>"{p.quote}"</blockquote>}
          </div>
          <div className="stack" style={{ '--stack-gap': '32px' }}>
            {s.goals && (
              <div className="card" style={{ padding: 24, gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--accent)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.875rem', fontWeight: 600 }}>✓</span><h3 style={{ margin: 0, fontSize: '1.125rem' }}>Goals</h3></div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {(isArrayGoals ? s.goals : [s.goals]).map((g) => <li key={g} className="body body--sm" style={{ paddingLeft: 32, position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>✓</span>{g}</li>)}
                </ul>
              </div>
            )}
            {s.frustrations && (
              <div className="card" style={{ padding: 24, gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--down)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.875rem', fontWeight: 600 }}>✕</span><h3 style={{ margin: 0, fontSize: '1.125rem' }}>Frustrations</h3></div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {(isArrayFrustrations ? s.frustrations : [s.frustrations]).map((f) => <li key={f} className="body body--sm" style={{ paddingLeft: 32, position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--down)' }}>✕</span>{f}</li>)}
                </ul>
              </div>
            )}
          </div>
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
        {s.gallery && s.gallery.length > 0 && (
          <div className="grid grid--2">
            {s.gallery.map((g) => <Stack key={g.label} gap={14}><Label>{g.label}</Label><Frame image={g.image} label={g.imageLabel} height={g.h} /></Stack>)}
          </div>
        )}
        {s.footer && <div className="body body--sm" style={{ padding: '16px 20px', background: 'var(--alt)', borderRadius: 'var(--radius-sm)', color: 'var(--muted)' }}>{s.footer}</div>}
      </Stack>
    </Section>
  );
}

export function Findings({ s }) {
  return (
    <Section>
      <Stack gap={40}>
        <SectionHead eyebrow={s.eyebrow} title={s.title} text={s.text} />
        <div className="stack" style={{ '--stack-gap': '16px' }}>
          {s.findings.map((f) => (
            <div key={f.number} className="card" style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 24, alignItems: 'start' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, borderRadius: '50%', background: 'var(--accent)', color: '#fff', fontSize: '1.25rem', fontWeight: 600 }}>{f.number}</div>
              <div className="stack" style={{ '--stack-gap': '12px' }}>
                <div className="stack" style={{ '--stack-gap': '4px' }}>
                  <Label tone="down">Finding</Label>
                  <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}>{f.finding}</h3>
                </div>
                <div className="stack" style={{ '--stack-gap': '4px', paddingTop: 8, borderTop: '1px solid var(--border)' }}>
                  <Label tone="accent">Design Response</Label>
                  <p className="body body--sm" style={{ margin: 0 }}>{f.response}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Stack>
    </Section>
  );
}

export function JourneyScreens({ s }) {
  return (
    <Section>
      <Stack gap={40}>
        <h2 style={{ margin: 0 }}>{s.title}</h2>
        <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
          {s.screens.map((screen) => (
            <div key={screen.number} className="stack" style={{ '--stack-gap': '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '50%', background: 'var(--accent)', color: '#fff', fontSize: '0.875rem', fontWeight: 600 }}>{screen.number}</div>
                <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>{screen.name}</h3>
              </div>
              <p className="body body--sm" style={{ margin: 0, color: 'var(--muted)' }}>{screen.description}</p>
            </div>
          ))}
        </div>
        {s.footer && <div className="body body--sm" style={{ padding: '16px 20px', background: 'var(--alt)', borderRadius: 'var(--radius-sm)', color: 'var(--muted)', marginTop: 24 }}>{s.footer}</div>}
      </Stack>
    </Section>
  );
}

export function DesignSystem({ s }) {
  const ColorGroup = ({ title, colors, note }) => (
    <div className="stack" style={{ '--stack-gap': '16px' }}>
      <div className="stack" style={{ '--stack-gap': '4px' }}>
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>{title}</h3>
        {note && <p className="body body--sm" style={{ margin: 0, color: 'var(--muted)' }}>{note}</p>}
      </div>
      <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
        {colors.map((c) => (
          <div key={c.value} className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ background: c.value, height: 80, width: '100%' }} />
            <div style={{ padding: 16 }}>
              <div style={{ fontSize: '.875rem', fontWeight: 600, marginBottom: 4 }}>{c.name}</div>
              <div style={{ fontSize: '.75rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)', marginBottom: 8 }}>{c.value}</div>
              <div style={{ fontSize: '.75rem', color: 'var(--caption)', fontFamily: 'var(--font-mono)' }}>{c.variable}</div>
              <div style={{ fontSize: '.8125rem', color: 'var(--muted)', marginTop: 8, paddingTop: 8, borderTop: '1px solid var(--border)' }}>{c.usage}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Section>
      <Stack gap={48}>
        <SectionHead eyebrow={s.eyebrow} title={s.title} text={s.text} />
        <Stack gap={40}>
          {s.spacing && (
            <div className="stack" style={{ '--stack-gap': '16px' }}>
              <h3 style={{ margin: 0 }}>Spacing</h3>
              <div style={{ fontSize: '.75rem', color: 'var(--caption)', fontFamily: 'var(--font-mono)' }}>4px base · Tailwind scale</div>
              <div className="stack" style={{ '--stack-gap': '8px' }}>
                {s.spacing.map((sp) => (
                  <div key={sp.value} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ width: parseInt(sp.value) * 2, height: 12, background: 'var(--accent)', borderRadius: '2px', minWidth: '4px' }} />
                    <div style={{ minWidth: '60px', fontSize: '.875rem', fontWeight: 600 }}>{sp.value}</div>
                    <div style={{ fontSize: '.8125rem', color: 'var(--muted)' }}>{sp.usage}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {s.borderRadius && (
            <div className="stack" style={{ '--stack-gap': '16px' }}>
              <h3 style={{ margin: 0 }}>Border radius</h3>
              <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                {s.borderRadius.map((br) => (
                  <div key={br.name} className="card">
                    <div style={{ width: '100%', height: 60, background: 'var(--brand-soft)', borderRadius: br.value === 'full' ? '999px' : br.value, marginBottom: 12 }} />
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>{br.name}</div>
                    <div style={{ fontSize: '.75rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)', marginBottom: 8 }}>{br.value}</div>
                    <div style={{ fontSize: '.75rem', color: 'var(--caption)', fontFamily: 'var(--font-mono)' }}>{br.variable}</div>
                    <div style={{ fontSize: '.8125rem', color: 'var(--muted)', marginTop: 8, paddingTop: 8, borderTop: '1px solid var(--border)' }}>{br.usage}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {s.elevation && (
            <div className="stack" style={{ '--stack-gap': '16px' }}>
              <h3 style={{ margin: 0 }}>Elevation</h3>
              <div style={{ fontSize: '.75rem', color: 'var(--caption)' }}>Borders first, shadows for emphasis only</div>
              <div className="stack" style={{ '--stack-gap': '12px' }}>
                {s.elevation.map((el) => (
                  <div key={el.name} className="card" style={{ padding: 24, background: 'var(--brand-tint)', boxShadow: el.name === 'None (default)' ? '0 0 0 1px var(--color-line)' : el.value, border: el.name === 'None (default)' ? 'none' : undefined }}>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>{el.name}</div>
                    <div style={{ fontSize: '.75rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)', marginBottom: 8 }}>{el.value}</div>
                    <div style={{ fontSize: '.8125rem', color: 'var(--muted)' }}>{el.usage}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {s.typography && (
            <div className="stack" style={{ '--stack-gap': '20px' }}>
              <h3 style={{ margin: 0 }}>Typography</h3>
              <div className="stack" style={{ '--stack-gap': '12px' }}>
                <p className="body body--sm" style={{ margin: 0, color: 'var(--muted)' }}>{s.typography.description}</p>
              </div>
              <div className="stack" style={{ '--stack-gap': '8px' }}>
                {s.typography.scales.map((scale) => (
                  <div key={scale.name} style={{ display: 'grid', gridTemplateColumns: '120px 1fr auto', gap: 24, alignItems: 'center', paddingBottom: 12, borderBottom: '1px solid var(--border)' }}>
                    <div>
                      <div style={{ fontWeight: 600, marginBottom: 2 }}>{scale.name}</div>
                      <div style={{ fontSize: '.75rem', color: 'var(--caption)', fontFamily: 'var(--font-mono)' }}>{scale.size} · {scale.weight} · h {scale.lineHeight}</div>
                    </div>
                    <div style={{ fontSize: scale.size.replace('px', '') > 20 ? '2rem' : '1rem', fontWeight: scale.weight, lineHeight: scale.lineHeight }}>
                      {scale.name === 'Display' ? 'Aa' : 'The quick brown fox'}
                    </div>
                    <div style={{ fontSize: '.75rem', color: 'var(--caption)', fontFamily: 'var(--font-mono)', textAlign: 'right' }}>tracking {scale.tracking}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="stack" style={{ '--stack-gap': '20px' }}>
            <h3 style={{ margin: 0 }}>Colour palette</h3>
            <ColorGroup title="Brand" colors={s.colors.brand} />
            <ColorGroup title="Neutrals" colors={s.colors.neutrals} note="Ink carries a faint green undertone so text never looks pure black against the mint page." />
            <ColorGroup title="Status" colors={s.colors.status} note="Kept deliberately muted so they never compete with the brand green." />
            <ColorGroup title="Status tints" colors={s.colors.statusTints} note="Each status has a soft pair used behind pills and inline messages." />
          </div>
          {s.effects && (
            <div className="stack" style={{ '--stack-gap': '16px' }}>
              <h3 style={{ margin: 0 }}>Special effects</h3>
              <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                {s.effects.map((e) => (
                  <div key={e.name} className="card">
                    <div style={{ fontWeight: 600, marginBottom: 8 }}>{e.name}</div>
                    <div style={{ fontSize: '.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)', marginBottom: 12, padding: 8, background: 'var(--alt)', borderRadius: 'var(--radius-sm)' }}>{e.description}</div>
                    <div style={{ fontSize: '.875rem', color: 'var(--muted)' }}>{e.usage}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Stack>
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
