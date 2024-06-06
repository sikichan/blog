import { MdOutlineLightMode, MdOutlineNightsStay } from 'react-icons/md';
import { PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react';
import useThemeContext from '@/hooks/useThemeContext.tsx';
import { ThemeType } from '@/components/ThemeProvider.tsx';
import { RiMacLine } from 'react-icons/ri';
import { useSystemIsDarkMode } from '@/hooks/useSystemIsDarkMode.tsx';

const ThemeButton = () => {
  const { styles, theme, setTheme } = useThemeContext();
  const isDarkTheme = theme === ThemeType.Dark;
  const isSystemTheme = theme === ThemeType.System;
  const systemIsDarkMode = useSystemIsDarkMode();

  const [isMenuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const showMenu = useCallback(() => {
    setMenuVisible((prev) => !prev);
  }, []);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      !iconRef.current?.contains(event.target as Node) &&
      !menuRef.current?.contains(event.target as Node)
    ) {
      setMenuVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  useEffect(() => {
    setMenuVisible(false);
  }, [theme]);

  return (
    <div className="relative">
      <div
        className={`rounded-full cursor-pointer transition ease-linear duration-400
       hover:shadow-lg hover:shadow-indigo-500/50`}
        onClick={showMenu}
        ref={iconRef}
      >
        {isSystemTheme ? (
          systemIsDarkMode ? (
            <MdOutlineNightsStay />
          ) : (
            <MdOutlineLightMode />
          )
        ) : isDarkTheme ? (
          <MdOutlineNightsStay />
        ) : (
          <MdOutlineLightMode />
        )}
      </div>
      {isMenuVisible && (
        <div
          ref={menuRef}
          className={`absolute top-10 right-0 py-2 flex flex-col gap-3 rounded w-36 justify-center shadow-sm shadow-gray ${styles}`}
        >
          <Button onClick={() => setTheme(ThemeType.Light)} color={'light'}>
            <MdOutlineLightMode /> Light
          </Button>

          <Button onClick={() => setTheme(ThemeType.Dark)} color={'dark'}>
            <MdOutlineNightsStay /> Dark
          </Button>
          <Button onClick={() => setTheme(ThemeType.System)} color={'system'}>
            <RiMacLine /> System
          </Button>
        </div>
      )}
    </div>
  );
};
export default ThemeButton;

const Button = ({
  children,
  onClick,
  color,
}: PropsWithChildren & { onClick: () => void; color: string }) => {
  const { theme } = useThemeContext();
  return (
    <div
      className={`flex items-center gap-2 p-1
       ${color === theme ? 'text-red-500 cursor-default' : 'cursor-pointer'}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
