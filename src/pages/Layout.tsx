import { useContext } from 'react';
import { ThemeContext } from '@/components/ThemeProvider.tsx';
import NavBar from '@/components/NavBar.tsx';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  const { styles } = useContext(ThemeContext);

  return (
    <div className="flex flex-col h-[100vh] items-center">
      <header className={`font-bold flex justify-between px-6 items-center w-full p-4 ${styles}`}>
        <Link className="text-2xl" to={'/'}>
          SikiChan's Blog
        </Link>
        <NavBar />
      </header>
      <main className={`flex-1 px-6 pt-10 w-full ${styles}`}>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
