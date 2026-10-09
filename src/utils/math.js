export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const easeOut = (t) => 1 - Math.pow(1 - t, 3);
// Slow start, slow end: gives the "thick, viscous" feel of melting chocolate
export const smoothstep = (t) => t * t * (3 - 2 * t);
export const seeded = (i, salt = 91.7) => {
  const x = Math.sin(i * salt) * 10000;
  return x - Math.floor(x);
};
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
