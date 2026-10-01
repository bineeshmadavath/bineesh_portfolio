import { profile } from '../../data/profile';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer">
          <span>© {new Date().getFullYear()} {profile.name}. Designed &amp; built with React.</span>
          <nav className="footer__links" aria-label="Social">
            {profile.socials.filter((s) => !['GitHub', 'X'].includes(s.label)).map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>)}
          </nav>
        </div>
      </div>
    </footer>
  );
}
