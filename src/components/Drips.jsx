import { useEffect, useMemo, useState } from 'react';
import { makeDrips, VIEW_W, BAND } from '../utils/drips.js';
import { clamp, easeOut, prefersReducedMotion } from '../utils/math.js';

/**
 * Chocolate hanging from the top edge.
 * - progress (0..1): drip length follows scroll, each drip starting at a different moment
 * - auto: drips slowly melt down once on page load (CSS transition)
 */
export default function Drips({ progress = 0, auto = false, top = false, fill = 'var(--drip)' }) {
  const drips = useMemo(() => makeDrips(), []);
  const [loaded, setLoaded] = useState(!auto || prefersReducedMotion());

  useEffect(() => {
    if (!auto) return undefined;
    const id = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(id);
  }, [auto]);

  return (
    <svg className={`drips${top ? ' drips--top' : ''}`} viewBox={`0 0 ${VIEW_W} 200`} preserveAspectRatio="xMidYMin slice" aria-hidden="true">
      <rect x="0" y="-2" width={VIEW_W} height={BAND} fill={fill} />
      {drips.map((d, i) => {
        const t = auto ? (loaded ? 1 : 0) : easeOut(clamp(progress * 1.7 - d.delay));
        return (
          <g
            key={i}
            className={auto ? 'drip-auto' : undefined}
            style={{ transform: `translateY(${t * d.len}px)`, transitionDelay: auto ? `${d.delay * 3}s` : '0s' }}
          >
            <rect x={d.x} y="-300" width={d.w} height="310" fill={fill} />
            <circle cx={d.x + d.w / 2} cy="10" r={d.w / 2 + 1.5} fill={fill} />
            <rect x={d.x + d.w * 0.22} y="-300" width={d.w * 0.14} height="300" fill="rgba(255,255,255,.12)" />
          </g>
        );
      })}
    </svg>
  );
}
