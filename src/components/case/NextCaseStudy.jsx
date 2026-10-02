import { Link } from 'react-router-dom';
import { getCaseStudy } from '../../data/caseStudies';
import { ArrowRight } from '../ui/Icons';

export default function NextCaseStudy({ currentSlug }) {
  const current = getCaseStudy(currentSlug);
  const next = current?.next ? getCaseStudy(current.next) : null;

  if (!next) return null;

  return (
    <section className="case-next" aria-label="Next case study">
      <Link className="case-next__link" to={next.href || `/work/${next.slug}`}>
        <span className="case-next__copy">
          <span className="case-next__eyebrow">Next case study · {next.number}</span>
          <span className="case-next__title">{next.title}</span>
          <span className="case-next__category">{next.category}</span>
        </span>
        <span className="case-next__action">View case study <ArrowRight /></span>
      </Link>
    </section>
  );
}
