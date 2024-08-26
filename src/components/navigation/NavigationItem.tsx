import { Link, useLocation } from 'react-router-dom';

interface Props {
  title: string;
  icon: React.ReactNode;
  link?: string;
  onClick?: () => void;
}
const NavigationItem = ({ title, icon, link, onClick }: Props) => {
  const location = useLocation();

  return (
    <>
      <Link
        to={link || '#'}
        onClick={onClick}
        className="flex flex-col items-center gap-2 md:justify-center xl:flex-row xl:justify-start xl:gap-4"
      >
        <span
          className={`${location.pathname === link ? 'opacity-100' : 'opacity-70'}`}
        >
          {icon}
        </span>
        <span
          className={`text-sm md:hidden xl:inline xl:text-base ${location.pathname === link ? 'font-semibold' : 'font-normal'}`}
        >
          {title}
        </span>
      </Link>
    </>
  );
};
export default NavigationItem;
