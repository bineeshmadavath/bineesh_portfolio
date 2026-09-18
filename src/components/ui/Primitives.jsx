import { Link } from 'react-router-dom';
import { ArrowRight } from './Icons';

export const Eyebrow = ({ children, className = '' }) => <div className={`eyebrow ${className}`}>{children}</div>;
export const Label = ({ children, tone = '', className = '' }) => <div className={`label ${tone ? `label--${tone}` : ''} ${className}`}>{children}</div>;
export const Tag = ({ children }) => <span className="tag">{children}</span>;
export const Tags = ({ items }) => <div className="tags">{items.map((t) => <Tag key={t}>{t}</Tag>)}</div>;

export function Section({ children, alt = false, size = '', tightTop = false, className = '', id }) {
  const cls = ['section', alt ? 'section--alt' : '', size ? `section--${size}` : '', tightTop ? 'section--tight-top' : '', className].filter(Boolean).join(' ');
  return <section id={id} className={cls}><div className="container">{children}</div></section>;
}

export function SectionHead({ eyebrow, title, text, aside }) {
  return (
    <div className="section-head">
      <div className="section-head__title">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        {title && <h2>{title}</h2>}
      </div>
      {text ? <p className="lede">{text}</p> : aside || null}
    </div>
  );
}

/** Button that renders as <a>, <Link> or <button> depending on props. */
export function Button({ to, href, onClick, variant = 'primary', size = '', children, arrow = true, type = 'button', className = '', ...rest }) {
  const cls = ['btn', `btn--${variant}`, size ? `btn--${size}` : '', className].filter(Boolean).join(' ');
  const inner = <>{children}{arrow && <ArrowRight />}</>;
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>;
  return <button type={type} onClick={onClick} className={cls} {...rest}>{inner}</button>;
}

export function LinkArrow({ to, href, children, className = '' }) {
  const cls = `link-arrow ${className}`;
  if (to) return <Link to={to} className={cls}>{children}<ArrowRight /></Link>;
  return <a href={href} className={cls}>{children}<ArrowRight /></a>;
}

export function Card({ label, labelTone, title, text, children, className = '', large = false }) {
  return (
    <div className={`card ${className}`}>
      {label && <Label tone={labelTone}>{label}</Label>}
      {title && <div className={`card__title ${large ? 'card__title--lg' : ''}`}>{title}</div>}
      {text && <div className="body body--sm">{text}</div>}
      {children}
    </div>
  );
}

/** Screenshot slot: renders the image if present, otherwise a labelled browser-frame placeholder. */
export function Frame({ image, label, height = 320, alt = '' }) {
  return (
    <figure className="frame" style={{ margin: 0 }}>
      <div className="frame__bar" aria-hidden="true"><span /><span /><span /></div>
      {image
        ? <img className="frame__img" src={image} alt={alt || label} loading="lazy" />
        : <div className="frame__body" style={{ '--frame-h': `${height}px` }} role="img" aria-label={`Placeholder: ${label}`}>[{label}]</div>}
    </figure>
  );
}

export function RuledList({ items, tone = 'down' }) {
  return (
    <ol className="ruled" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
      {items.map((t, i) => (
        <li key={t} className="ruled__row">
          <span className={`ruled__num ${tone === 'down' ? 'ruled__num--down' : ''}`}>{String(i + 1).padStart(2, '0')}</span>
          <span className="ruled__text ruled__text--ink">{t}</span>
        </li>
      ))}
    </ol>
  );
}

export function NumberedList({ items }) {
  return (
    <ol className="ruled" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
      {items.map(([title, text], i) => (
        <li key={title} className="ruled__row ruled__row--titled">
          <span className="ruled__num">{String(i + 1).padStart(2, '0')}</span>
          <span className="ruled__title">{title}</span>
          <span className="ruled__text">{text}</span>
        </li>
      ))}
    </ol>
  );
}

export function ArrowList({ items, boxed = false }) {
  return (
    <ul className={`arrow-list ${boxed ? 'arrow-list--boxed' : ''}`} style={{ margin: 0, padding: 0, listStyle: 'none' }}>
      {items.map((t) => <li key={t} className="arrow-list__item">{t}</li>)}
    </ul>
  );
}

export function StepTracker({ label, steps }) {
  return (
    <div className="steps">
      {label && <Label>{label}</Label>}
      <ol className="steps__track" style={{ '--n': steps.length, margin: 0, padding: 0, listStyle: 'none' }}>
        <div className="steps__line" aria-hidden="true" />
        {steps.map(([title, text], i) => (
          <li key={title} className="step">
            <div className="step__dot" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
            <div className="step__title">{title}</div>
            <div className="step__text">{text}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Stats({ items }) {
  return (
    <div className="container">
      <dl className="stats" style={{ margin: 0 }}>
        {items.map((s) => (
          <div key={s.label} className="stat">
            <dd className={`stat__num ${s.tone === 'down' ? 'stat__num--down' : ''} ${s.tone === 'up' ? 'stat__num--up' : ''}`} style={{ margin: 0, color: s.tone === 'accent' ? 'var(--accent)' : undefined }}>{s.value}</dd>
            <dt className="label">{s.label}</dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
