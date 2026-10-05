import CaseLink from './CaseLink';
import { getCaseStudy } from '../../data/caseStudies';
import { ArrowRight } from '../ui/Icons';

export default function NextCaseStudy({ currentSlug, className = '' }) {
  const current = getCaseStudy(currentSlug);
  const next = current?.next ? getCaseStudy(current.next) : null;

  if (!next) return null;

  return (
    <section className={`case-next ${className}`.trim()} aria-label="Next case study">
      <CaseLink caseStudy={next} className="case-next__link">
        <span className="case-next__copy">
          <span className="case-next__eyebrow">Next case study · {next.number}{next.locked && ' · Locked'}</span>
          <span className="case-next__title">{next.title}</span>
          <span className="case-next__category">{next.category}</span>
        </span>
        <span className="case-next__action">{next.locked ? 'Request access' : 'View case study'} <ArrowRight /></span>
      </CaseLink>
    </section>
  );
}
