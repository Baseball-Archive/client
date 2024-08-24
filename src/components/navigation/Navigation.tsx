import { useState } from 'react';
import {
  HomeIcon,
  CalendarDaysIcon,
  PlusCircleIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserCircleIcon,
} from '@heroicons/react/20/solid';
import NavigationItem from './NavigationItem';
import PostsMenu from './PostsMenu';
import Logo from '/images/logo.png';
import Icon from '/images/icon.png';
import ROUTES from '../../constants/router';

const ICON_SIZE = 'size-8';
const LIST_STYLE = 'py-4';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const togglePostModal = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="fixed bottom-0 top-auto z-10 h-[100px] w-full border bg-white md:top-0 md:h-screen md:w-[100px] xl:w-1/4">
      <nav className="px-6 md:py-4">
        <div className="hidden py-8 md:block md:text-center xl:text-left">
          <img
            className="hidden w-[130px] xl:block"
            src={Logo}
            alt="야구볼램 로고"
          />
          <img
            className="w-[100px] md:block xl:hidden"
            src={Icon}
            alt="야구볼램 아이콘"
          />
        </div>
        <ul className="flex flex-row justify-between md:flex-col">
          <li className={LIST_STYLE}>
            <NavigationItem
              title="홈"
              link={ROUTES.HOME}
              icon={<HomeIcon className={ICON_SIZE} />}
            />
          </li>
          <li className={LIST_STYLE}>
            <NavigationItem
              title="오늘의 야구"
              link={`${ROUTES.LEAGUE}/${ROUTES.SCHEDULE}`}
              icon={<CalendarDaysIcon className={ICON_SIZE} />}
            />
          </li>
          <li className={`md:relative ${LIST_STYLE}`}>
            <NavigationItem
              title="기록하기"
              onClick={togglePostModal}
              icon={<PlusCircleIcon className={ICON_SIZE} />}
            />
            {isMenuOpen && <PostsMenu togglePostModal={togglePostModal} />}
          </li>
          <li className={LIST_STYLE}>
            <NavigationItem
              title="커뮤니티"
              link={ROUTES.POSTS}
              icon={<ChatBubbleOvalLeftEllipsisIcon className={ICON_SIZE} />}
            />
          </li>
          <li className={`hidden md:block ${LIST_STYLE}`}>
            <NavigationItem
              title="프로필"
              link={ROUTES.USER}
              icon={<UserCircleIcon className={ICON_SIZE} />}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
