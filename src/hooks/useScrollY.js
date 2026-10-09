import { useEffect, useState } from 'react';
import { prefersReducedMotion } from '../utils/math.js';

export function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const onScroll = () => setY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return y;
}
