import { useEffect, useRef, useState } from 'react';
import { Close } from '../ui/Icons';
import { Label } from '../ui/Primitives';

export default function CollectionModal({ collection, onClose }) {
  const closeRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const items = collection?.gallery && collection.gallery.length ? collection.gallery : [collection?.image];

  useEffect(() => {
    setActiveIndex(0);
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [collection, onClose]);

  if (!collection) return null;

  const activeItem = items[activeIndex] || collection.image;
  const goPrev = () => setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  const goNext = () => setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));

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

        <div className="modal__media">
          <div className="modal__grid">
            {items.map((item, index) => {
              const thumbnail = item?.type === 'video' ? item.thumbnail : item;
              return (
                <button
                  key={`${collection.id}-${index}`}
                  type="button"
                  className={`modal__tile ${index === activeIndex ? 'is-active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`${collection.title} — ${item?.type === 'video' ? 'video' : 'image'} ${index + 1}`}
                >
                  <img src={thumbnail} alt="" loading="lazy" />
                </button>
              );
            })}
          </div>

          <div className="modal__viewer">
            <button type="button" className="modal__nav modal__nav--prev" onClick={goPrev} aria-label="Previous image">‹</button>
            {activeItem?.type === 'video' ? (
              <iframe
                className="modal__viewer-video"
                src={`${activeItem.src}?autoplay=1&title=0&byline=0&portrait=0`}
                title={activeItem.title}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img className="modal__viewer-image" src={activeItem} alt={`${collection.title} — selected piece`} />
            )}
            <button type="button" className="modal__nav modal__nav--next" onClick={goNext} aria-label="Next image">›</button>
          </div>
        </div>
      </div>
    </div>
  );
}
