import { IMG } from '../assets';
import { BUSINESS, NAV_LINKS } from '../data/content.js';

export default function Nav({ theme, onToggleTheme }) {
  return (
    <nav className="nav">
      <a className="brand" href="#top">
        <span className="badge"><img src={IMG.logo} alt="" /></span>
        {BUSINESS.name}
      </a>
      <div className="nav__links">
        {NAV_LINKS.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </div>
    </nav>
  );
}
