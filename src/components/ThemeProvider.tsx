import { useIsDarkMode } from '@/hooks/useIsDarkMode.tsx';
import React, { createContext, PropsWithChildren, useState } from 'react';

interface ThemeProviderProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeProviderProps>({
  theme: '',
  setTheme: () => {},
});
const ThemeProvider = ({ children }: PropsWithChildren) => {
  const isDarkMode = useIsDarkMode();
  const [theme, setTheme] = useState(() => (isDarkMode ? 'dark' : 'light'));

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
export default ThemeProvider;
