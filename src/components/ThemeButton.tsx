import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import styles from './ThemeButton.module.css';
import { Sunrise, Sunset } from 'lucide-react';

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button className={styles['icon-button']} aria-hidden />;
  }

  return (
    <button
      className={styles['icon-button']}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      title={`Set to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? <Sunset size={30} /> : <Sunrise size={30} />}
    </button>
  );
}
