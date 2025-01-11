import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useThemeSwitcher = (): [string, Dispatch<SetStateAction<string>>] => {
  const [mode, setMode] = useState('');
  const preferDarkQuery = "(prefer-color-scheme: dark)";

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);

    const handleChange = () => {
      const check = mediaQuery.matches ? 'dark' : 'light';
      setMode(check);
      if (check === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  return [mode, setMode];
};
