import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import LockedCaseModal from './LockedCaseModal';

export const caseHref = (c) => c.href || `/work/${c.slug}`;

/** Link to a case study. For a locked one, clicking opens the "locked" popup instead of navigating. */
export default function CaseLink({ caseStudy, children, ...rest }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  if (!caseStudy.locked) return <Link to={caseHref(caseStudy)} {...rest}>{children}</Link>;

  return (
    <>
      <Link
        to={caseHref(caseStudy)}
        aria-haspopup="dialog"
        onClick={(e) => { e.preventDefault(); setOpen(true); }}
        {...rest}
      >
        {children}
      </Link>
      {open && <LockedCaseModal caseStudy={caseStudy} onClose={close} />}
    </>
  );
}
