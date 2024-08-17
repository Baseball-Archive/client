import { useRef } from 'react';
import PostsMenuItem from './PostsMenuItem';
import {
  PlusCircleIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import { useClickOutside } from '../../hooks/useClickOutside';

interface Props {
  togglePostModal: () => void;
}

const PostsMenu = ({ togglePostModal }: Props) => {
  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside(menuRef, togglePostModal);

  return (
    <div className="bg-background-overlay fixed bottom-0 left-0 right-0 top-0 z-10 backdrop-blur-sm md:absolute md:bg-transparent md:backdrop-blur-none">
      <div
        ref={menuRef}
        className="absolute bottom-0 left-0 z-20 w-full border bg-white px-6 pb-16 md:bottom-auto md:top-[100%] md:w-[240px] md:pb-0 xl:w-full"
      >
        <h4 className="flex items-center justify-center border-b py-4 md:hidden">
          <PlusCircleIcon className="size-8" />
          <span className="font-light">기록하기</span>
        </h4>
        <XMarkIcon
          onClick={togglePostModal}
          className="absolute right-6 top-4 size-6 cursor-pointer md:hidden"
        />
        <ul>
          <li className="py-4" onClick={togglePostModal}>
            <PostsMenuItem
              title="일기 쓰기"
              link="/archive"
              icon={<BookOpenIcon className="size-8" />}
            />
          </li>
          <li className="py-4" onClick={togglePostModal}>
            <PostsMenuItem
              title="커뮤니티 글쓰기"
              link="/post"
              icon={<ChatBubbleLeftRightIcon className="size-8" />}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default PostsMenu;
