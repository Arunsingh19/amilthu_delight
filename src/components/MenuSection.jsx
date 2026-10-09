import { MENU } from '../data/content.js';
import Reveal from './Reveal.jsx';

export default function MenuSection() {
  return (
    <section className="pad section--top alt" id="menu">
      <div className="wrap">
        {MENU.map((group) => (
          <div key={group.title} className={`menu${group.reverse ? ' menu--reverse' : ''}`}>
            <Reveal src={group.img} alt={group.title} />
            <div>
              <div className="eyebrow">{group.eyebrow}</div>
              <h2>{group.title}</h2>
              <ul className="menu__list">
                {group.items.map(([name, note]) => (
                  <li key={name}>{name}<span>{note}</span></li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
