import { IMG } from '../assets';
import Reveal from './Reveal.jsx';

export default function About() {
  return (
    <section className="pad section--top" id="story">
      <div className="wrap about">
        <div>
          <div className="eyebrow">Our story</div>
          <h2>Small batch.<br />Made with love.</h2>
          <p className="about__text">
            Amilthu Delight began in 2025 in a home kitchen in Thalavaipuram. Everything is whipped, baked and
            finished by hand, from our ragi brownies to our chocolate drip cakes.
          </p>
          <div className="stats">
            <div><b>2025</b>Established</div>
            <div><b>100%</b>Homemade</div>
            <div><b>All TN</b>Courier available</div>
          </div>
        </div>
        <Reveal src={IMG.girl2} alt="Baker smiling with brownies, cookies and a chocolate cake" />
      </div>
    </section>
  );
}
