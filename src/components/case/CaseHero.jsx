import { Link } from 'react-router-dom';
import { useParallax } from '../../hooks/useParallax';
import HeroBackground from '../layout/HeroBackground';
import { ArrowLeft } from '../ui/Icons';
import { Eyebrow, Frame, Label } from '../ui/Primitives';

export default function CaseHero({ hero }) {
  const { onMove, onLeave, layer } = useParallax();
  return (
    <section className="hero" onMouseMove={onMove} onMouseLeave={onLeave}>
      <HeroBackground layer={layer} />
      <div className="container case-hero hero__content">
        <Link to="/" className="back-link"><ArrowLeft width={14} height={14} /> Back to work</Link>
        <div className="case-hero__grid">
          <div className="stack" style={{ '--stack-gap': '28px' }}>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className="case-hero__title">{hero.title}<em className="em">{hero.titleEm}</em></h1>
            <p className="lede">{hero.lede}</p>
          </div>
          <Frame image={hero.image} label={hero.imageLabel} height={320} />
        </div>
        <dl className="case-hero__meta" style={{ margin: 0 }}>
          {hero.meta.map((m) => (
            <div key={m.label}>
              <dt className="label">{m.label}</dt>
              <dd style={{ margin: 0, fontWeight: 600 }}>{m.value}</dd>
              <dd style={{ margin: 0, fontSize: '.875rem', color: 'var(--muted)' }}>{m.sub}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
