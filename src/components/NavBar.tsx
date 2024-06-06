import ThemeButton from '@/components/ThemeButton.tsx';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="w-1/3 flex gap-6 justify-end items-center">
      <Link to={'/articles'}>Articles</Link>
      <ThemeButton />
      <a className="cursor-pointer" href="https://github.com/sikichan" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};
export default NavBar;
