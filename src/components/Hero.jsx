import { IMG } from '../assets';
import Drips from './Drips.jsx';
import { useScrollY } from '../hooks/useScrollY.js';

export default function Hero() {
  const y = useScrollY();
  return (
    <header className="hero" id="top">
      <Drips auto top />
      <div className="wrap hero__grid">
        <div>
          <div className="kick">Homemade bakery · Thalavaipuram · Est. 2025</div>
          <h1>Freshly baked,<br /><em>happiness</em> in every bite.</h1>
          <p className="hero__lead">
            Fudgy brownies, millet cookies, handcrafted chocolates and celebration cakes, made in small batches
            with love and delivered across Tamilnadu.
          </p>
          <a className="btn" href="#order">Order now</a>
          <a className="btn btn--outline" href="#menu">See the menu</a>
        </div>
        <div className="frame">
          <div className="arch">
            <img src={IMG.girl} alt="Baker piping chocolate frosting onto a drip cake"
              style={{ transform: `translateY(${-Math.min(y, 700) * 0.05}px)` }} />
          </div>
          <img className="chip chip--a" src={IMG.brownie} alt="Chocolate brownies" style={{ transform: `translateY(${-y * 0.12}px)` }} />
          <img className="chip chip--b" src={IMG.cookies} alt="Chocolate chip cookies" style={{ transform: `translateY(${-y * 0.2}px)` }} />
          <img className="frame__logo" src={IMG.logo} alt="Amilthu Delight logo" />
        </div>
      </div>
    </header>
  );
}
