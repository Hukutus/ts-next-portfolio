import { useTheme } from 'next-themes';
import { Sunrise, Sunset } from 'lucide-react';
import styles from './ThemeButton.module.css';

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

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
