import { seeded } from './math.js';

export const VIEW_W = 1200;
export const BAND = 26;

// Builds a list of drips (position, width, length, start delay) from a seed
export function makeDrips(count = 26, salt = 91.7) {
  return Array.from({ length: count }, (_, i) => ({
    x: i * (VIEW_W / count) + seeded(i, salt) * 24,
    w: 12 + seeded(i + 3, salt) * 20,
    len: 35 + seeded(i + 9, salt) * (i % 3 ? 90 : 150),
    delay: seeded(i + 5, salt) * 0.5,
  }));
}

// Static SVG path of a chocolate edge with drips hanging down (used by the pour layers)
export function dripEdgePath(drips) {
  let d = `M0 0H${VIEW_W}V20`;
  for (let i = drips.length - 1; i >= 0; i--) {
    const { x, w, len } = drips[i];
    d += `H${x + w}V${20 + len}a${w / 2} ${w / 2} 0 0 1 ${-w} 0V20`;
  }
  return d + 'H0Z';
}
