import { Link, useLocation } from "react-router-dom";

interface Props {
    title: string;
    icon: React.ReactNode;
    link?: string;
}
const NavigationItem = ({title, icon, link}: Props) => {
    const location = useLocation();

    return <>
    <Link to={link || "#"} className="flex flex-col items-center gap-2 xl:gap-4 md:justify-center xl:justify-start xl:flex-row">
        <span className={`${location.pathname === link ? 'opacity-100' : 'opacity-70'}`}>{icon}</span>
        <span className={`text-sm md:hidden xl:inline xl:text-base ${location.pathname === link ? 'font-medium' : 'font-light'}`}>{title}</span>
    </Link>
  </>
};
export default NavigationItem;
