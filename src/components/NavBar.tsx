import ThemeButton from '@/components/ThemeButton.tsx';
import { FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import useMediaQuery from '@/hooks/useMediaQuery.tsx';
import { TfiMenu } from 'react-icons/tfi';

const NavBar = () => {
  const isAboveSmallScreen = useMediaQuery('(min-width: 768px)');
  if (!isAboveSmallScreen) {
    return (
      <>
        <TfiMenu className="text-2xl cursor-pointer" />
      </>
    );
  }
  return (
    <div className="w-1/3 flex gap-4 justify-around items-center">
      <LinkButton page="Articles" />
      <LinkButton page="Projects" />
      <ThemeButton />
      <a className="cursor-pointer" href="https://github.com/sikichan" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};
const LinkButton = ({ page }: { page: string }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <NavLink
      to={`/${lowerCasePage}`}
      className={({ isActive }) => (isActive ? 'text-red-500' : '')}
    >
      {page}
    </NavLink>
  );
};
export default NavBar;
