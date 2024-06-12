import ThemeButton from '@/components/ThemeButton.tsx';
import { FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import useMediaQuery from '@/hooks/useMediaQuery.tsx';
import { PropsWithChildren } from 'react';
import { TbArticle } from 'react-icons/tb';
import { PiProjectorScreenChart } from 'react-icons/pi';

const NavBar = () => {
  const isAboveSmallScreen = useMediaQuery('(min-width: 768px)');
  if (!isAboveSmallScreen) {
    return (
      <div className="w-2/5 flex gap-3 justify-around items-center">
        <LinkButton page="Articles" icon>
          <TbArticle className="text-2xl" />
        </LinkButton>
        <LinkButton page="Projects" icon>
          <PiProjectorScreenChart className="text-2xl" />
        </LinkButton>
        <ThemeButton />
        <a className="cursor-pointer" href="https://github.com/sikichan" target="_blank">
          <FaGithub />
        </a>
      </div>
    );
  }
  return (
    <div className="w-2/3 flex gap-6 justify-end items-center">
      <LinkButton page="Articles" />
      <LinkButton page="Projects" />
      <ThemeButton />
      <a className="cursor-pointer" href="https://github.com/sikichan" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};
const LinkButton = ({
  page,
  children,
  icon = false,
}: PropsWithChildren & { page: string; icon?: boolean }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <NavLink
      to={`/${lowerCasePage}`}
      className={({ isActive }) => (isActive ? 'text-red-500 border-b-2 border-red-500' : '')}
    >
      {icon ? children : page}
    </NavLink>
  );
};
export default NavBar;
