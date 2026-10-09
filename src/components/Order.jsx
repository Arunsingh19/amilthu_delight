import { BUSINESS } from '../data/content.js';

export default function Order() {
  const cards = [
    ['WhatsApp / Phone', BUSINESS.phone],
    ['Instagram', BUSINESS.instagram],
    ['Location', BUSINESS.location],
    ['Delivery', BUSINESS.delivery],
  ];
  return (
    <section className="pad section--top" id="order">
      <div className="wrap">
        <div className="eyebrow">Order</div>
        <h2>Let’s bake something<br />for you.</h2>
        <div className="info">
          {cards.map(([label, value]) => (
            <div key={label}><small>{label}</small><b>{value}</b></div>
          ))}
        </div>
        <p className="order__actions">
          <a className="btn" href={BUSINESS.whatsapp}>Order on WhatsApp</a>
          <a className="btn btn--outline" href={BUSINESS.instagramUrl}>Follow on Instagram</a>
        </p>
      </div>
    </section>
  );
}
