import { profile } from '../../data/profile';
import { Eyebrow, NumberedList, Section } from '../ui/Primitives';

export default function Process() {
  return (
    <Section alt size="sm">
      <div className="process">
        <div className="stack" style={{ '--stack-gap': '18px' }}>
          <Eyebrow>02 — How I work</Eyebrow>
          <h2>Research to release, one continuous loop.</h2>
          <p className="lede">I turn complex problems into meaningful product experiences through continuous research, design, collaboration, and validation.</p>
        </div>
        <NumberedList items={profile.process.map((s) => [s.title, s.text])} />
      </div>
    </Section>
  );
}
