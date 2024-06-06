import { useSystemIsDarkMode } from '@/hooks/useSystemIsDarkMode.tsx';
import React, { createContext, PropsWithChildren, useEffect, useState } from 'react';

export enum ThemeType {
  Dark = 'dark',
  Light = 'light',
  System = 'system',
}

interface ThemeProviderProps {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  styles: string;
}

export const ThemeContext = createContext<ThemeProviderProps>({
  theme: ThemeType.System,
  setTheme: () => {},
  styles: '',
});
const ThemeProvider = ({ children }: PropsWithChildren) => {
  const systemIsDarkMode = useSystemIsDarkMode();
  const defaultTheme = (localStorage.getItem('theme') as ThemeType) || 'system';
  const initialTheme =
    defaultTheme === ThemeType.System
      ? systemIsDarkMode
        ? ThemeType.Dark
        : ThemeType.Light
      : (defaultTheme as ThemeType);
  const [theme, setTheme] = useState(initialTheme);
  const styles =
    theme === ThemeType.Dark
      ? 'bg-dark text-dark-t'
      : theme === ThemeType.Light
        ? 'bg-light text-dark'
        : 'dark:bg-dark dark:text-dark-t bg-light text-dark';
  useEffect(() => {
    localStorage.setItem('theme', String(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, styles }}>{children}</ThemeContext.Provider>
  );
};
export default ThemeProvider;
