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
  const defaultTheme = (localStorage.getItem('theme') as ThemeType) || 'system';
  const [theme, setTheme] = useState(defaultTheme);
  const styles: string =
    theme === ThemeType.Dark
      ? 'bg-dark text-dark-t'
      : theme === ThemeType.Light
        ? 'bg-white text-dark'
        : 'dark:bg-dark dark:text-dark-t bg-white text-dark';
  useEffect(() => {
    localStorage.setItem('theme', String(theme));
    document.body.classList.add(...styles.split(' '));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, styles }}>{children}</ThemeContext.Provider>
  );
};
export default ThemeProvider;
