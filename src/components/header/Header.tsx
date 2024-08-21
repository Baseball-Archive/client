import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/20/solid';
import Logo from '/images/logo.png';

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-10 w-full md:hidden">
      <div className="flex items-end justify-between border bg-white px-3 pb-2 pt-6">
        <Link className="w-[120px]" to="/">
          <img src={Logo} alt="야구볼램 로고" />
        </Link>
        <Link to="/users/user">
          <UserCircleIcon className="size-8" />
        </Link>
      </div>
    </header>
  );
};
export default Header;