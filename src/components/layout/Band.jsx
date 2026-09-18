import { Link } from 'react-router-dom';
import { ArrowRight } from '../ui/Icons';
import { Eyebrow, Label } from '../ui/Primitives';

/** The solid moss closing band used at the bottom of every page. */
export default function Band({ eyebrow, title, text, children, next }) {
  return (
    <section className="band">
      <div className="container section section--sm">
        <div className="band__grid">
          <div className="stack" style={{ '--stack-gap': '18px' }}>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h2>{title}</h2>
            {text && <p className="body" style={{ fontSize: '1.0625rem' }}>{text}</p>}
          </div>
          <div className="stack" style={{ '--stack-gap': '20px', alignItems: 'flex-start' }}>
            {next && (
              <Link to={next.to} className="band__next">
                <Label className="label" tone="">{next.label}</Label>
                <div className="card__title card__title--lg" style={{ color: '#fff' }}>{next.title}</div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '.875rem', fontWeight: 600 }}>Read next <ArrowRight /></span>
              </Link>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
