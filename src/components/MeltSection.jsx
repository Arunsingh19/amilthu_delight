import { useMemo } from 'react';
import { IMG } from '../assets';
import { useScrollProgress } from '../hooks/useScrollProgress.js';
import { clamp, smoothstep } from '../utils/math.js';
import { makeDrips, dripEdgePath, VIEW_W } from '../utils/drips.js';

/**
 * Tall scroll section with a sticky stage. Two chocolate layers pour down very slowly
 * (about six screens of scrolling) and cover the cake photo, one following the other.
 */
export default function MeltSection() {
  const [ref, p] = useScrollProgress('stick', 0.045);

  const milkEdge = useMemo(() => dripEdgePath(makeDrips(22, 41.3)), []);
  const darkEdge = useMemo(() => dripEdgePath(makeDrips(26, 77.9)), []);

  // Layer 1 (milk chocolate) leads, layer 2 (dark) follows a little later
  const milkQ = smoothstep(clamp(p / 0.78));
  const darkQ = smoothstep(clamp((p - 0.1) / 0.78));
  const textIn = clamp((p - 0.62) * 4);

  return (
    <section className="melt" ref={ref}>
      <div className="melt__stage">
        <img className="melt__bg" src={IMG.cake} alt=""
          style={{ transform: `scale(${1 + p * 0.12})` }} />
        <div className="melt__caption">
          <h2>Rich. Glossy.<br />Melted to perfection.</h2>
        </div>

        <div className="pour pour--milk" style={{ transform: `translateY(${-(1 - milkQ) * 115}%)` }}>
          <svg className="pour__edge" viewBox={`0 0 ${VIEW_W} 200`} preserveAspectRatio="xMidYMin slice" aria-hidden="true">
            <path d={milkEdge} />
          </svg>
        </div>

        <div className="pour pour--dark" style={{ transform: `translateY(${-(1 - darkQ) * 115}%)` }}>
          <div className="pour__content" style={{ opacity: textIn, transform: `translateY(${(1 - textIn) * 24}px)` }}>
            <h2>Every bite starts<br />with real chocolate.</h2>
            <p>Baked fresh to order in Thalavaipuram. No shortcuts, no factory trays. Just a small kitchen and a lot of cocoa.</p>
          </div>
          <svg className="pour__edge" viewBox={`0 0 ${VIEW_W} 200`} preserveAspectRatio="xMidYMin slice" aria-hidden="true">
            <path d={darkEdge} />
          </svg>
        </div>
      </div>
    </section>
  );
}
