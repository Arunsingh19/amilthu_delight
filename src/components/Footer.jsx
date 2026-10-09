import { BUSINESS } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">{BUSINESS.name} · Freshly whipped · Est. {BUSINESS.est}</div>
    </footer>
  );
}
