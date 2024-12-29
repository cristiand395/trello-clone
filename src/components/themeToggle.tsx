import useLocalStorage from '@/hooks/useLocalStorage';
import { useEffect } from 'react';

function ThemeToggle() {
  const [ theme, setTheme ] = useLocalStorage('theme', 'light');

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeToggle = () => {
    setTheme((prevTheme:string)=> (prevTheme === 'light' ? 'dark' : 'light'));
  }
  return (
    <button
      onClick={themeToggle}
    >
      {theme === 'light' ? '🌞' : '🌜'}
    </button>
  );
}

export { ThemeToggle };