import { useEffect, useRef } from 'react';
import { Close } from '../ui/Icons';
import LockedNotice from './LockedNotice';

export default function LockedCaseModal({ caseStudy, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const opener = document.activeElement;
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
      opener?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal modal--sm" role="dialog" aria-modal="true" aria-labelledby="locked-case-title" onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} type="button" className="icon-btn modal__close" onClick={onClose} aria-label="Close"><Close /></button>
        <LockedNotice caseStudy={caseStudy} titleId="locked-case-title" />
      </div>
    </div>
  );
}
