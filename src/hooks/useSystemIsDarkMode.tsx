import useMediaQuery from '@/hooks/useMediaQuery.tsx';

const useSystemIsDarkMode = () => {
  return useMediaQuery('(prefers-color-scheme: dark)');
};
export default useSystemIsDarkMode;
