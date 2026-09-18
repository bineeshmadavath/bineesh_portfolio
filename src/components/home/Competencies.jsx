import { profile } from '../../data/profile';
import { Eyebrow, Section } from '../ui/Primitives';

export default function Competencies() {
  return (
    <Section>
      <div className="stack" style={{ '--stack-gap': '48px' }}>
        <div className="stack" style={{ '--stack-gap': '14px' }}>
          <Eyebrow>03 — Core competencies</Eyebrow>
          <h2>Three disciplines, one seat.</h2>
        </div>
        <div className="grid grid--3" style={{ gap: 'clamp(24px, 3.4vw, 48px)' }}>
          {profile.competencies.map((c) => (
            <div key={c.title} className="competency">
              <div className="competency__title">{c.title}</div>
              <p className="body body--sm">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
