import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

interface Props {
  title: string;
  icon: React.ReactNode;
  link: string;
}

const PostsMenuItem = ({ title, icon, link }: Props) => {
  return (
    <>
      <Link to={link} className="flex justify-between">
        <p className="flex items-center gap-4">
          {icon}
          <span className="text-lg font-medium md:text-base">{title}</span>
        </p>
        <ChevronRightIcon className="size-8" />
      </Link>
    </>
  );
};
export default PostsMenuItem;
