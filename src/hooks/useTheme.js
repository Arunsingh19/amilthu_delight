import { useEffect, useState } from 'react';

const KEY = 'amilthu-theme';

export function useTheme() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === 'light' || saved === 'dark') setTheme(saved);
    } catch (e) { /* storage unavailable */ }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(KEY, theme); } catch (e) { /* ignore */ }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  return { theme, toggle };
}
