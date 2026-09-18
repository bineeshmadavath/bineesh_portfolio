import { useEffect, useRef } from 'react';
import { Close } from '../ui/Icons';
import { Label } from '../ui/Primitives';

/** Lightweight gallery modal: traps focus, closes on Esc/backdrop. Items are placeholders until real artwork is added. */
export default function CollectionModal({ collection, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [onClose]);
  if (!collection) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
          <div className="stack" style={{ '--stack-gap': '8px' }}>
            <Label tone="accent">{collection.eyebrow}</Label>
            <h2 id="modal-title" style={{ fontSize: '2rem' }}>{collection.title}</h2>
            <p className="body body--sm">{collection.text}</p>
          </div>
          <button ref={closeRef} type="button" className="icon-btn" onClick={onClose} aria-label="Close gallery"><Close /></button>
        </div>
        <div className="modal__grid">
          <div className="modal__tile" style={{ backgroundImage: `url(${collection.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} role="img" aria-label={`${collection.title} — sample`} />
          {Array.from({ length: collection.items - 1 }).map((_, i) => (
            <div key={i} className="modal__tile">[{collection.video ? 'film' : 'piece'} {String(i + 2).padStart(2, '0')}]</div>
          ))}
        </div>
      </div>
    </div>
  );
}
