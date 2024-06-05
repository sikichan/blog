import { useContext } from 'react';
import { ThemeContext } from '@/components/ThemeProvider.tsx';
import HeaderMenu from '@/components/HeaderMenu.tsx';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkTheme = theme === 'dark';
  const styles = isDarkTheme ? 'bg-dark text-dark-t' : 'bg-light text-dark';

  return (
    <div className="h-[100vh]">
      <header
        className={`font-mono flex justify-around items-center w-full p-3 transition ease-linear duration-1000 ${styles}`}
      >
        <Link className="text-3xl" to={'/'}>
          Siki Chan
        </Link>
        <HeaderMenu />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
