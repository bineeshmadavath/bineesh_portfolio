import { profile } from '../../data/profile';
import { useParallax } from '../../hooks/useParallax';
import { useTheme } from '../../context/ThemeContext';
import HeroBackground from '../layout/HeroBackground';
import { Eyebrow, Label, LinkArrow } from '../ui/Primitives';

export default function Hero() {
  const { onMove, onLeave, layer } = useParallax();
  const { theme } = useTheme();
  const portrait = `${import.meta.env.BASE_URL}images/portrait-${theme === 'dark' ? 'light' : 'dark'}.png`;
  const h = profile.headline;
  return (
    <section className="hero" onMouseMove={onMove} onMouseLeave={onLeave}>
      <HeroBackground layer={layer} ring portrait={portrait} />
      <div className="container home-hero hero__content">
        <div className="stack" style={{ '--stack-gap': '28px', maxWidth: 1000 }}>
          <Eyebrow>{profile.role} · {profile.location}</Eyebrow>
          <h1>{h.lead}<br />{h.mid}<br /><em className="em">{h.em}</em></h1>
        </div>
        <div className="home-hero__meta">
          {profile.heroMeta.map((m) => (
            <div key={m.label}><Label>{m.label}</Label>{Array.isArray(m.text) ? <div className="body hero-meta__copy">{m.text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div> : <p className="body">{m.text}</p>}</div>
          ))}
          <div style={{ gap: 14 }}>
            <Label>Start here</Label>
            <LinkArrow href="#work" onClick={(event) => { event.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); }}>Selected work</LinkArrow>
          </div>
        </div>
      </div>
    </section>
  );
}
