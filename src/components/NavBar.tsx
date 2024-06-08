import ThemeButton from '@/components/ThemeButton.tsx';
import { FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="w-1/3 flex gap-6 justify-end items-center">
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
