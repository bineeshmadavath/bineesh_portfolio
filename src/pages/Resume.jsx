import { profile } from '../data/profile';
import { resume } from '../data/resume';
import { useParallax } from '../hooks/useParallax';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import HeroBackground from '../components/layout/HeroBackground';
import Band from '../components/layout/Band';
import { Print } from '../components/ui/Icons';
import { Button, Eyebrow, Label, Section, SectionHead, Stats, Tags } from '../components/ui/Primitives';

const PrintButton = ({ onBand = false }) => (
  <Button variant={onBand ? 'on-band' : 'primary'} size="sm" arrow={false} onClick={() => window.print()} className="no-print"><Print /> Print / save PDF</Button>
);

export default function Resume() {
  useDocumentTitle('Resume');
  const { onMove, onLeave, layer } = useParallax();
  return (
    <>
      <section className="hero" onMouseMove={onMove} onMouseLeave={onLeave}>
        <HeroBackground layer={layer} />
        <div className="container resume-hero hero__content">
          <div className="resume-hero__top">
            <div className="stack" style={{ '--stack-gap': '22px', maxWidth: 900 }}>
              <Eyebrow>Resume · {profile.role} · {profile.company} · {profile.location}</Eyebrow>
              <h1>{profile.name}</h1>
              <div className="display-italic" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', lineHeight: 1.25 }}>{resume.tagline}</div>
            </div>
            <div className="stack no-print" style={{ '--stack-gap': '12px', alignItems: 'flex-end' }}>
              <PrintButton />
              <Label>{resume.updated}</Label>
            </div>
          </div>
          <div className="resume-hero__contact mono">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span>{profile.phone}</span>
            <span>{profile.location} · IST</span>
            {profile.socials.slice(0, 2).map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>)}
          </div>
        </div>
      </section>
      <Stats items={resume.stats} />
      <Section size="sm">
        <div className="stack">
          <Eyebrow>01 — Summary</Eyebrow>
          <div className="grid grid--3" style={{ gap: 'clamp(24px, 3.4vw, 48px)' }}>
            {resume.summary.map((s) => <div key={s.title} className="summary-col"><div className="summary-col__title">{s.title}</div><p className="body body--sm">{s.text}</p></div>)}
          </div>
        </div>
      </Section>
      <Section alt size="sm">
        <div className="stack">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
            <div className="stack" style={{ '--stack-gap': '14px' }}><Eyebrow>02 — Experience</Eyebrow><h2>{resume.employer.title}</h2></div>
            <Label>{resume.employer.dates}</Label>
          </div>
          <div>
            {resume.projects.map((p) => (
              <article key={p.name} className="project">
                <div className="stack" style={{ '--stack-gap': '10px' }}>
                  <h3 className="project__name">{p.name}</h3><Label tone="accent">{p.kind}</Label><span className="mono" style={{ fontSize: '.75rem', color: 'var(--caption)' }}>{p.dates}</span>
                </div>
                <div className="stack" style={{ '--stack-gap': '18px' }}>
                  <p className="project__desc">{p.desc}</p>
                  <ul className="stack" style={{ '--stack-gap': '12px', margin: 0, padding: 0, listStyle: 'none' }}>
                    {p.bullets.map(([lead, text]) => <li key={lead} className="bullet"><span><strong>{lead}:</strong> {text}</span></li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
      <Section size="sm">
        <div className="stack" style={{ '--stack-gap': '32px' }}>
          <SectionHead eyebrow="03 — Earlier experience" title="Twelve years of animation and design before the first enterprise screen." text="The Flash and illustration years are where the eye for motion, colour and hierarchy comes from — see Creative Works." />
          <div>
            {resume.earlier.map((e) => (
              <div key={e.company} className="earlier">
                <div><div className="earlier__company">{e.company}</div><div style={{ fontSize: '.8125rem', color: 'var(--caption)' }}>{e.city}</div></div>
                <div style={{ fontWeight: 600 }}>{e.title}</div>
                <div className="body body--sm" style={{ fontSize: '.875rem' }}>{e.text}</div>
                <div className="earlier__dates">{e.dates}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section alt size="sm">
        <div className="split split--rev">
          <div className="stack" style={{ '--stack-gap': '32px' }}>
            <Eyebrow>04 — Technical expertise</Eyebrow>
            {resume.expertise.map(([l, items]) => <div key={l} className="stack" style={{ '--stack-gap': '12px' }}><Label>{l}</Label><Tags items={items} /></div>)}
          </div>
          <div className="stack" style={{ '--stack-gap': '24px' }}>
            <Eyebrow>05 — Key competencies</Eyebrow>
            <div className="ruled">
              {resume.competencies.map(([a, b]) => <div key={a} className="stack" style={{ '--stack-gap': '8px', padding: '22px 0', borderTop: '1px solid var(--border)' }}><div className="card__title">{a}</div><div className="body body--sm">{b}</div></div>)}
            </div>
          </div>
        </div>
      </Section>
      <Section size="sm">
        <div className="stack" style={{ '--stack-gap': '32px' }}>
          <Eyebrow>06 — Education &amp; certifications</Eyebrow>
          <div className="grid grid--3" style={{ gap: 16 }}>
            {resume.education.map(([t, org, kind]) => <div key={t} className="edu-card"><Label>{kind}</Label><div className="edu-card__title">{t}</div><div className="body body--sm" style={{ fontSize: '.875rem' }}>{org}</div></div>)}
          </div>
        </div>
      </Section>
      <Band eyebrow="The long version is above. The short one is a call." title="Want the story behind any of these numbers?">
        <Button to="/contact" variant="on-band">Get in touch</Button>
        <PrintButton onBand />
      </Band>
    </>
  );
}
