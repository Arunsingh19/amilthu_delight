import { useInView } from '../hooks/useInView.js';

// Image that is covered by chocolate which then melts away downward
export default function Reveal({ src, alt, className = '' }) {
  const [ref, seen] = useInView(0.25);
  return (
    <div ref={ref} className={`ph ${className}${seen ? ' ph--open' : ''}`}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}
