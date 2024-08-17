import { Link } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/20/solid";

const Header = () => {
  return (
    <header className="flex justify-between items-end px-3 pt-6 pb-2 border bg-white">
        <Link className="font-logo text-2xl" to="/">
            야구볼램
        </Link>
        <Link to="/users/user">
            <UserCircleIcon className="size-8" />
        </Link>
    </header>
  )
};
export default Header;
