import { Navigate, useParams } from 'react-router-dom';
import { getCaseStudy } from '../data/caseStudies';
import { profile } from '../data/profile';
import CaseHero from '../components/case/CaseHero';
import Glance from '../components/case/Glance';
import CaseSection from '../components/case/CaseSection';
import Band from '../components/layout/Band';
import { Button } from '../components/ui/Primitives';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function CaseStudy() {
  const { slug } = useParams();
  const c = getCaseStudy(slug);
  useDocumentTitle(c ? `${c.title} — case study` : 'Not found');
  if (!c) return <Navigate to="/" replace />;
  const next = getCaseStudy(c.next);
  return (
    <article key={c.slug}>
      <CaseHero hero={c.hero} />
      <Glance glance={c.glance} />
      {c.sections.map((s, i) => <CaseSection key={i} section={s} />)}
      <Band eyebrow="What this taught me" title={<>{c.takeaway.text}<em style={{ fontStyle: 'italic' }}>{c.takeaway.em}</em></>}
        next={next && { to: `/work/${next.slug}`, label: `Next case study · ${next.number}`, title: `${next.title} — ${next.category.toLowerCase()}` }}>
        <Button href={`mailto:${profile.email}`} variant="on-band">{c.takeaway.cta}</Button>
      </Band>
    </article>
  );
}
