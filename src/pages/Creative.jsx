import { useCallback, useState } from 'react';
import { bridge, collections } from '../data/creative';
import { useParallax } from '../hooks/useParallax';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import HeroBackground from '../components/layout/HeroBackground';
import Band from '../components/layout/Band';
import CollectionModal from '../components/creative/CollectionModal';
import { ArrowDiag, Play } from '../components/ui/Icons';
import { Button, Card, Eyebrow, Label, LinkArrow, Section, SectionHead } from '../components/ui/Primitives';

function ArtCard({ c, onOpen }) {
  return (
    <button type="button" className={`art-card ${c.span === 2 ? 'span-2' : ''}`} onClick={() => onOpen(c)} aria-haspopup="dialog">
      <div className="art-card__img" style={{ '--art-h': `${c.height}px` }}>
        <img src={c.image} alt={`${c.title} — sample`} loading="lazy" />
        {c.video && <div className="art-card__play" aria-hidden="true"><Play /></div>}
      </div>
      <div className="art-card__body">
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}><Label tone="accent">{c.eyebrow}</Label><Label>{c.count}</Label></div>
        <div className="art-card__title">{c.title}</div>
        <p className="body body--sm" style={{ flexGrow: 1 }}>{c.text}</p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 6 }}><ArrowDiag /></div>
      </div>
    </button>
  );
}

export default function Creative() {
  useDocumentTitle('Creative works');
  const { onMove, onLeave, layer } = useParallax();
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);
  return (
    <>
      <section className="hero" onMouseMove={onMove} onMouseLeave={onLeave}>
        <HeroBackground layer={layer} />
        <div className="container hero__content" style={{ paddingTop: 'clamp(64px, 8vw, 112px)', paddingBottom: 'clamp(40px, 5vw, 80px)' }}>
          <div className="split split--rev split--end">
            <div className="stack" style={{ '--stack-gap': '28px' }}>
              <Eyebrow>Creative works · Paintings, sketches, illustration, animation</Eyebrow>
              <h1>Before product design, there was <em className="em">a pencil.</em></h1>
            </div>
            <p className="lede">I started as a 2D animator and illustrator long before the first wireframe. This is the personal work that never stopped — and the eye for colour, hierarchy and motion that quietly runs through every enterprise screen I design.</p>
          </div>
        </div>
      </section>
      <Section tightTop>
        <div className="stack">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, flexWrap: 'wrap' }}><Eyebrow>Four collections</Eyebrow><Label>Click any collection to open the gallery</Label></div>
          <div className="art-grid">{collections.map((c) => <ArtCard key={c.id} c={c} onOpen={setOpen} />)}</div>
        </div>
      </Section>
      <Section alt size="sm">
        <div className="stack" style={{ '--stack-gap': '32px' }}>
          <SectionHead eyebrow="Why it's here" title="The craft and the product work are the same skill, pointed differently." text="This isn't a hobby page. It's the reason the enterprise work looks and moves the way it does." />
          <div className="grid grid--3">{bridge.map((b) => <Card key={b.label} label={b.label} title={b.title} text={b.text} />)}</div>
        </div>
      </Section>
      <Band eyebrow="Back to the product work" title="See how the same eye works on an enterprise screen.">
        <Button to="/work/smartops" variant="on-band">Read the SmartOps case study</Button>
        <LinkArrow to="/contact">Or just say hello</LinkArrow>
      </Band>
      {open && <CollectionModal collection={open} onClose={close} />}
    </>
  );
}
