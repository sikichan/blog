import { useContext } from 'react';
import { ThemeContext } from '@/components/ThemeProvider.tsx';

const useThemeContext = () => {
  return useContext(ThemeContext);
};
export default useThemeContext;
