// import { useState } from "react";
import {
  HomeIcon,
  CalendarDaysIcon,
  PlusCircleIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import NavigationItem from "./NavigationItem";
import PostsMenu from "./PostsMenu";
import Logo from "/images/logo.png"
import Icon from "/images/icon.png"

const ICON_SIZE = "size-8";
const LIST_STYLE = "py-4";

const Navigation = () => {

  return (
    <>
      <nav className="px-6 md:py-4">
        <div className="hidden py-8 md:block md:text-center xl:text-left">
          <img className="hidden xl:block w-[130px]" src={Logo} alt="야구볼램 로고" />
          <img className="md:block xl:hidden w-[100px]" src={Icon} alt="야구볼램 아이콘" />
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
              link="/league/schedule"
              icon={<CalendarDaysIcon className={ICON_SIZE} />}
            />
          </li>
          <li className={`md:relative ${LIST_STYLE}`}>
            <PostsMenu button={
              <NavigationItem
              title="기록하기"
              icon={<PlusCircleIcon className={ICON_SIZE} />}
            />
            } />
          </li>
          <li className={LIST_STYLE}>
            <NavigationItem
              title="커뮤니티"
              link="/posts"
              icon={<ChatBubbleOvalLeftEllipsisIcon className={ICON_SIZE} />}
            />
          </li>
          <li className={`hidden md:block ${LIST_STYLE}`}>
            <NavigationItem title="프로필" link="/users/user" icon={<UserCircleIcon className={ICON_SIZE}/>}/>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navigation;
