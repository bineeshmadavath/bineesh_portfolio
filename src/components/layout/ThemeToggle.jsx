import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun } from '../ui/Icons';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === 'dark';
  return (
    <button type="button" className="icon-btn" onClick={toggle} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} aria-pressed={dark} title={dark ? 'Light theme' : 'Dark theme'}>
      {dark ? <Sun /> : <Moon />}
    </button>
  );
}
