import { useState } from 'react';
import { profile } from '../../data/profile';
import { Button, Label } from '../ui/Primitives';

const topics = ['A role', 'A project', 'Consulting', 'Just saying hi'];
const initial = { name: '', email: '', company: '', message: '' };

/** Local-state form. Submit opens a prefilled mailto: as the no-backend fallback; swap `send()` for a POST later. */
export default function ContactForm() {
  const [topic, setTopic] = useState(topics[0]);
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!values.name.trim()) e.name = 'Add your name so I know who I\'m replying to.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) e.email = 'Enter an email address I can reply to.';
    if (values.message.trim().length < 10) e.message = 'A sentence or two is plenty — but more than a few words.';
    return e;
  };

  const send = () => {
    const subject = encodeURIComponent(`[${topic}] from ${values.name}${values.company ? ` · ${values.company}` : ''}`);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name}\n${values.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    send();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="contact-form" role="status">
        <div className="contact-success stack" style={{ '--stack-gap': '8px' }}>
          <div className="card__title">Message ready to send</div>
          <p className="body body--sm">Your mail app should have opened with everything filled in. If it didn't, write to <a href={`mailto:${profile.email}`}>{profile.email}</a> directly.</p>
          <button type="button" className="link-arrow" style={{ background: 'none', border: 0, borderBottom: '1.5px solid var(--ink)', padding: 0, cursor: 'pointer' }} onClick={() => { setSent(false); setValues(initial); }}>Write another</button>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="stack" style={{ '--stack-gap': '10px' }}>
        <Label>Or write here</Label>
        <div className="card__title card__title--lg">Start a conversation</div>
      </div>
      <fieldset style={{ border: 0, padding: 0, margin: 0 }} className="stack">
        <legend className="label" style={{ marginBottom: 10 }}>What is this about?</legend>
        <div className="tags" role="group">
          {topics.map((t) => <button key={t} type="button" className="chip" aria-pressed={topic === t} onClick={() => setTopic(t)}>{t}</button>)}
        </div>
      </fieldset>
      <div className="contact-form__fields">
        <div className="field">
          <label className="label" htmlFor="c-name">Your name</label>
          <input id="c-name" name="name" autoComplete="name" value={values.name} onChange={set('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'c-name-err' : undefined} placeholder="Priya Nair" />
          {errors.name && <div id="c-name-err" className="field__error">{errors.name}</div>}
        </div>
        <div className="field">
          <label className="label" htmlFor="c-email">Email</label>
          <input id="c-email" name="email" type="email" autoComplete="email" value={values.email} onChange={set('email')} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'c-email-err' : undefined} placeholder="priya@company.com" />
          {errors.email && <div id="c-email-err" className="field__error">{errors.email}</div>}
        </div>
        <div className="field field--wide">
          <label className="label" htmlFor="c-company">Company or team (optional)</label>
          <input id="c-company" name="company" autoComplete="organization" value={values.company} onChange={set('company')} placeholder="Acme Health · Product" />
        </div>
        <div className="field field--wide">
          <label className="label" htmlFor="c-message">Message</label>
          <textarea id="c-message" name="message" value={values.message} onChange={set('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'c-message-err' : undefined} placeholder="Tell me about the product, the team, and what a good outcome looks like." />
          {errors.message && <div id="c-message-err" className="field__error">{errors.message}</div>}
        </div>
      </div>
      <div className="contact-form__foot">
        <p className="form-note">No newsletter, no tracking. Your message goes straight to my inbox.</p>
        <Button type="submit" variant="primary">Send message</Button>
      </div>
    </form>
  );
}
