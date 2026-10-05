import { Navigate, useParams } from 'react-router-dom';
import { getCaseStudy } from '../data/caseStudies';
import { profile } from '../data/profile';
import CaseHero from '../components/case/CaseHero';
import Glance from '../components/case/Glance';
import CaseSection from '../components/case/CaseSection';
import NextCaseStudy from '../components/case/NextCaseStudy';
import LockedNotice from '../components/case/LockedNotice';
import BackLink from '../components/layout/BackLink';
import { Button, Eyebrow, Section } from '../components/ui/Primitives';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function CaseStudy({ slugOverride }) {
  const { slug } = useParams();
  const finalSlug = slugOverride ?? slug;
  const c = getCaseStudy(finalSlug);
  useDocumentTitle(c ? `${c.title} — case study` : 'Not found');
  if (!c) return <Navigate to="/" replace />;
  if (c.locked) {
    return (
      <Section size="sm">
        <div className="stack" style={{ '--stack-gap': 'clamp(32px, 4vw, 56px)', maxWidth: 640 }}>
          <BackLink />
          <LockedNotice caseStudy={c} as="h1" />
        </div>
      </Section>
    );
  }
  const sections = c.sections.filter((s) => !s.hidden);
  // Continue the "NN — …" eyebrow numbering from the last visible section.
  const lastNumber = sections.reduce((n, s) => Number(/^(\d+)/.exec(s.eyebrow ?? '')?.[1] ?? n), 0);
  const takeawayNumber = String(lastNumber + 1).padStart(2, '0');
  return (
    <article key={c.slug}>
      <CaseHero hero={c.hero} />
      <Glance glance={c.glance} />
      {sections.map((s, i) => <CaseSection key={i} section={s} />)}
      {!c.takeaway.hidden && (
        <Section size="sm" id="takeaways">
          <div className="stack" style={{ '--stack-gap': '28px', alignItems: 'flex-start' }}>
            <Eyebrow>{takeawayNumber} — What this taught me</Eyebrow>
            <h2 style={{ maxWidth: 1000 }}>{c.takeaway.text}<em className="em">{c.takeaway.em}</em></h2>
            <Button href={`mailto:${profile.email}`}>{c.takeaway.cta}</Button>
          </div>
        </Section>
      )}
      <NextCaseStudy currentSlug={c.slug} className={c.takeaway.hidden ? '' : 'case-next--flush-top'} />
    </article>
  );
}
