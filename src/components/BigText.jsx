import { useScrollProgress } from '../hooks/useScrollProgress.js';

export default function BigText() {
  const [ref, p] = useScrollProgress('view', 0.08);
  return (
    <div className="big" ref={ref} aria-label="Good food, happier people">
      <span style={{ transform: `translateX(${(0.5 - p) * 40}%)` }}>
        Good food, happier people ♡ Sweet moments always ♡ Made with love
      </span>
    </div>
  );
}
