import { MdOutlineLightMode, MdOutlineNightsStay } from 'react-icons/md';
import { useCallback } from 'react';
import useThemeContext from '@/hooks/useThemeContext.tsx';

const ThemeButton = () => {
  const { theme, setTheme } = useThemeContext();
  const isDarkTheme = theme === 'dark';
  const toggleTheme = useCallback(() => {
    isDarkTheme ? setTheme('light') : setTheme('dark');
  }, [theme]);
  return (
    <div
      className={`rounded-full cursor-pointer p-3 transition ease-linear duration-400
       hover:shadow-lg hover:shadow-indigo-500/50`}
      onClick={toggleTheme}
    >
      {isDarkTheme ? <MdOutlineNightsStay /> : <MdOutlineLightMode />}
    </div>
  );
};
export default ThemeButton;
