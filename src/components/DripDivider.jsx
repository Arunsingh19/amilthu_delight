import Drips from './Drips.jsx';
import { useScrollProgress } from '../hooks/useScrollProgress.js';

// Section divider where chocolate slowly melts down as it scrolls into view
export default function DripDivider({ background = 'var(--bg)' }) {
  const [ref, progress] = useScrollProgress('view', 0.05);
  return (
    <div ref={ref} className="divider" style={{ background }}>
      <Drips progress={progress} />
    </div>
  );
}
