import { useState } from "react";
import {
  HomeIcon,
  CalendarDaysIcon,
  PlusCircleIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import NavigationItem from "./NavigationItem";
import PostsMenu from "./PostsMenu";

const ICON_SIZE = "size-8";
const LIST_STYLE = "py-4";

const Navigation = () => {
  const [isClickPostButton, setIsClickPostButton] = useState(false);

  const togglePostModal = (
    event: React.MouseEvent<HTMLLIElement | SVGSVGElement>,
  ) => {
    event.stopPropagation();
    setIsClickPostButton((prev) => !prev);
  };

  return (
    <>
      <nav className="px-6 md:py-4">
        <div className="hidden py-8 font-logo text-3xl md:block md:text-center xl:text-left">
          야구볼램
        </div>
        <ul className="flex flex-row justify-between md:flex-col">
          <li className={LIST_STYLE}>
            <NavigationItem
              title="홈"
              link="/"
              icon={<HomeIcon className={ICON_SIZE} />}
            />
          </li>
          <li className={LIST_STYLE}>
            <NavigationItem
              title="오늘의 야구"
<<<<<<< HEAD
              link="/ranking"
=======
              link="/league/schedule"
>>>>>>> origin/feature/pages-League
              icon={<CalendarDaysIcon className={ICON_SIZE} />}
            />
          </li>
          <li className={`md:relative ${LIST_STYLE}`} onClick={togglePostModal}>
            <NavigationItem
              title="기록하기"
              icon={<PlusCircleIcon className={ICON_SIZE} />}
            />
            {isClickPostButton && <PostsMenu onClick={togglePostModal} />}
          </li>
          <li className={LIST_STYLE}>
            <NavigationItem
              title="커뮤니티"
              link="/posts"
              icon={<ChatBubbleOvalLeftEllipsisIcon className={ICON_SIZE} />}
            />
          </li>
          <li className={`hidden md:block ${LIST_STYLE}`}>
            <NavigationItem
              title="프로필"
              link="/mypage"
              icon={<UserCircleIcon className={ICON_SIZE} />}
            />
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navigation;
