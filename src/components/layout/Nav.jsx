import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { profile } from '../../data/profile';
import ThemeToggle from './ThemeToggle';
import { Close, Menu } from '../ui/Icons';

const links = [
  { to: '/', label: 'Work', end: true },
  { to: '/creative', label: 'Creative' },
  { to: '/resume', label: 'Resume' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isWork = (isActive) => isActive || pathname.startsWith('/work');

  return (
    <header className="container">
      <nav className="nav" aria-label="Primary">
        <Link to="/" className="nav__brand">{profile.name}</Link>
        <div className="nav__links">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className="nav__link" aria-current={undefined}
              style={({ isActive }) => ({ color: (l.end ? isWork(isActive) : isActive) ? 'var(--ink)' : undefined })}>{l.label}</NavLink>
          ))}
          <ThemeToggle />
          <Link to="/contact" className="btn btn--primary btn--sm">Let's talk</Link>
        </div>
        <div className="nav__mobile">
          <ThemeToggle />
          <button type="button" className="nav__burger" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((o) => !o)}>
            {open ? <Close /> : <Menu />}
          </button>
        </div>
        <div id="mobile-menu" className="nav__menu" hidden={!open}>
          {links.map((l) => <NavLink key={l.to} to={l.to} end={l.end} className="nav__link">{l.label}</NavLink>)}
          <NavLink to="/contact" className="nav__link">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}
