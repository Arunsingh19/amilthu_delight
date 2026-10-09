import { useEffect, useRef, useState } from 'react';
import { clamp, prefersReducedMotion } from '../utils/math.js';

/**
 * Scroll progress (0..1) of an element, eased with inertia so animations feel slow and fluid.
 * mode "stick": progress through a tall section that contains a sticky stage.
 * mode "view":  progress while the element travels through the viewport.
 * inertia: 0..1, lower = slower, thicker movement (default 0.06).
 */
export function useScrollProgress(mode = 'view', inertia = 0.06) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setProgress(1);
      return undefined;
    }
    let target = 0;
    let current = 0;
    let raf = 0;

    const measure = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      target =
        mode === 'stick'
          ? clamp(-r.top / (r.height - vh))
          : clamp((vh - r.top) / (vh * 0.8 + r.height * 0.5));
    };

    const tick = () => {
      current += (target - current) * inertia;
      if (Math.abs(target - current) < 0.0004) current = target;
      setProgress(current);
      raf = current !== target ? requestAnimationFrame(tick) : 0;
    };

    const onScroll = () => {
      measure();
      if (!raf) raf = requestAnimationFrame(tick);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [mode, inertia]);

  return [ref, progress];
}
