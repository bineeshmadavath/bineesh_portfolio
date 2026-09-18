import Hero from '../components/home/Hero';
import WorkGrid from '../components/home/WorkGrid';
import Process from '../components/home/Process';
import Competencies from '../components/home/Competencies';
import Band from '../components/layout/Band';
import { Button } from '../components/ui/Primitives';
import { Stats } from '../components/ui/Primitives';
import { profile } from '../data/profile';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats items={profile.stats} />
      <WorkGrid />
      <Process />
      <Competencies />
      <Band eyebrow="04 — Let's talk" title={<>Have a product that needs both the design <em style={{ fontStyle: 'italic' }}>and</em> the code?</>}>
        <Button to="/contact" variant="on-band">Start a conversation</Button>
        <div className="stack" style={{ '--stack-gap': '6px', color: 'var(--band-soft)' }}>
          <a href={`mailto:${profile.email}`} style={{ color: '#fff' }}>{profile.email}</a>
          <span>{profile.phone}</span>
        </div>
      </Band>
    </>
  );
}
