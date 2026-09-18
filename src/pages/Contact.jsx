import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { caseStudies } from '../data/caseStudies';
import { useParallax } from '../hooks/useParallax';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import HeroBackground from '../components/layout/HeroBackground';
import ContactForm from '../components/contact/ContactForm';
import { ArrowDiag, ArrowRight } from '../components/ui/Icons';
import { ArrowList, Eyebrow, Label, LinkArrow, Section } from '../components/ui/Primitives';

export default function Contact() {
  useDocumentTitle('Contact');
  const { onMove, onLeave, layer } = useParallax();
  const direct = [
    ['Email', profile.email, `mailto:${profile.email}`],
    ['Phone', profile.phone, profile.phoneHref],
    ...profile.socials.map((s) => [s.label, s.handle, s.href]),
  ];
  const here = [
    { label: "While you're here · 01", title: `${caseStudies[0].title} — AI inference review`, to: `/work/${caseStudies[0].slug}` },
    { label: "While you're here · 02", title: `${caseStudies[1].title} — civic engagement platform`, to: `/work/${caseStudies[1].slug}` },
    { label: "While you're here · 03", title: 'Creative works — paintings and motion', to: '/creative' },
  ];
  return (
    <>
      <section className="hero" onMouseMove={onMove} onMouseLeave={onLeave}>
        <HeroBackground layer={layer} />
        <div className="container hero__content stack" style={{ '--stack-gap': '32px', paddingTop: 'clamp(64px, 8vw, 112px)', paddingBottom: 'clamp(40px, 5vw, 72px)' }}>
          <div className="pill" style={{ alignSelf: 'flex-start' }}><span className="pill__dot" aria-hidden="true" />Open to roles and select engagements · {profile.timezone}</div>
          <h1 style={{ maxWidth: 1000 }}>Have a product that needs both the design <em className="em">and</em> the code?</h1>
          <p className="lede">Tell me what you're building and where it's stuck. I read everything, and I reply within two working days.</p>
        </div>
      </section>
      <Section tightTop>
        <div className="contact-grid">
          <div className="stack" style={{ '--stack-gap': '48px' }}>
            <div className="stack" style={{ '--stack-gap': '20px' }}>
              <Eyebrow>01 — Direct</Eyebrow>
              <div className="contact-list">
                {direct.map(([k, v, href]) => (
                  <a key={k} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"><Label>{k}</Label><span className="contact-list__value">{v}</span><ArrowDiag width={20} height={20} /></a>
                ))}
              </div>
            </div>
            <div className="stack" style={{ '--stack-gap': '16px' }}><Eyebrow>02 — Open to</Eyebrow><ArrowList items={profile.openTo} /></div>
            <div className="card"><Label>Resume</Label><div className="card__title" style={{ fontSize: '1.25rem' }}>Prefer the short version?</div><LinkArrow to="/resume">Open the resume page</LinkArrow></div>
          </div>
          <ContactForm />
        </div>
      </Section>
      <Section alt size="sm">
        <div className="grid grid--3">
          {here.map((h) => (
            <Link key={h.title} to={h.to} className="card" style={{ gap: 10 }}>
              <Label>{h.label}</Label><div className="card__title">{h.title}</div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '.875rem', fontWeight: 600, color: 'var(--accent)' }}>Open <ArrowRight /></span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
