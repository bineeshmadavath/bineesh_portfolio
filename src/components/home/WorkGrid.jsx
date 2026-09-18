import { Link } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';
import { ArrowDiag, ArrowRight } from '../ui/Icons';
import { Label, Section, Tags } from '../ui/Primitives';

function FeaturedCard({ c }) {
  return (
    <Link to={`/work/${c.slug}`} className="card card--dotted bento__feature" style={{ padding: 'clamp(24px, 3vw, 44px)', gap: 28 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
        <Label tone="accent">{c.number} · Featured</Label>
        <Label>{c.category}</Label>
      </div>
      <div className="stack" style={{ '--stack-gap': '18px', maxWidth: 620 }}>
        <h3 style={{ fontSize: 'clamp(1.75rem, 3.6vw, 3.25rem)', lineHeight: 1.02 }}>{c.title}</h3>
        <p className="body" style={{ fontSize: '1.0625rem' }}>{c.featuredSummary}</p>
        <div className="feature-metrics">
          {c.featuredMetrics.map((m) => (
            <div key={m.label} className="stack" style={{ '--stack-gap': '4px' }}>
              <div className="feature-metric__num" style={{ color: m.tone === 'down' ? 'var(--down)' : 'var(--up)' }}>{m.value}</div>
              <Label>{m.label}</Label>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <Tags items={c.tags} />
        <span className="link-arrow">Read the case study <ArrowRight /></span>
      </div>
    </Link>
  );
}

function SmallCard({ c }) {
  return (
    <Link to={`/work/${c.slug}`} className="card" style={{ gap: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Label tone="accent">{c.number}</Label>
        <Label>{c.categoryShort}</Label>
      </div>
      <div className="stack" style={{ '--stack-gap': '10px' }}>
        <h3 style={{ fontSize: '1.875rem' }}>{c.title}</h3>
        <p className="body body--sm">{c.summary}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', color: 'var(--ink)' }}><ArrowDiag /></div>
    </Link>
  );
}

export default function WorkGrid() {
  const featured = caseStudies.find((c) => c.featured);
  const rest = caseStudies.filter((c) => !c.featured);
  return (
    <Section id="work">
      <div className="stack" style={{ '--stack-gap': '48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
          <div className="stack" style={{ '--stack-gap': '14px' }}>
            <div className="eyebrow">01 — Selected work</div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 3.9vw, 3.5rem)', lineHeight: 1.05 }}>Three problems, three shipped answers.</h2>
          </div>
          <Label>2020 — 2026</Label>
        </div>
        <div className="bento">
          <FeaturedCard c={featured} />
          {rest.map((c) => <SmallCard key={c.slug} c={c} />)}
        </div>
      </div>
    </Section>
  );
}
