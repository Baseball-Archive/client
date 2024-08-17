import { Link } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import Logo from "/images/logo.png"

const Header = () => {
  return (
    <header className="flex justify-between items-end px-3 pt-6 pb-2 border bg-white">
        <Link className="w-[120px]" to="/">
            <img src={Logo} alt="야구볼램 로고" />
        </Link>
        <Link to="/users/user">
            <UserCircleIcon className="size-8" />
        </Link>
    </header>
  )
};
export default Header;
