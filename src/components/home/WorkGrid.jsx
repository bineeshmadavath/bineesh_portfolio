import { Link } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';
import { ArrowDiag, ArrowRight } from '../ui/Icons';
import { Label, Section, Tags } from '../ui/Primitives';

function FeaturedCard({ c }) {
  return (
    <Link to={c.href || `/work/${c.slug}`} className="card card--dotted bento__feature" style={{ padding: 'clamp(24px, 3vw, 44px)', gap: 28 }}>
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

// Photo background with a phone mockup rising from the bottom edge, as in the case study hero.
function DeviceThumb({ thumb, prominent = false }) {
  return (
    <div role="img" aria-label={thumb.label} style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--alt)', aspectRatio: prominent ? '4 / 3' : '16 / 10' }}>
      <img src={thumb.background} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.95 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(20,40,30,.12) 0%, rgba(20,40,30,.28) 55%, rgba(20,40,30,.42) 100%)' }} />
      {thumb.device && (
        <div style={{ position: 'absolute', left: '50%', top: '12%', bottom: '-12%', transform: 'translateX(-50%)', width: '46%', borderRadius: '22px', border: '5px solid #fff', overflow: 'hidden', background: '#EEF7F0', boxShadow: '0 24px 48px -18px rgba(0,0,0,.5)' }}>
          <img src={thumb.device} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
        </div>
      )}
    </div>
  );
}

function SmallCard({ c, prominent = false, muted = false }) {
  return (
    <Link to={c.href || `/work/${c.slug}`} className="card" style={{ gap: 20 }}>
      {c.thumb ? <DeviceThumb thumb={c.thumb} prominent={prominent} /> : c.hero?.image ? (
        <div style={{ overflow: 'hidden', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--alt)', aspectRatio: '4 / 3', opacity: muted ? 0.5 : 1 }}>
          <img src={c.hero.image} alt={c.hero.imageLabel || c.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      ) : null}
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
  const priority = caseStudies.filter((c) => c.prominent);
  const muted = caseStudies.filter((c) => !c.prominent);
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
          {priority.map((c) => <SmallCard key={c.slug} c={c} prominent />)}
          {muted.map((c) => <SmallCard key={c.slug} c={c} muted={c.muted} />)}
        </div>
      </div>
    </Section>
  );
}
