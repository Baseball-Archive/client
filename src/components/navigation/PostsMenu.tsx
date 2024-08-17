import { useEffect, useRef, useState } from "react";
import PostsMenuItem from "./PostsMenuItem";
import {
  PlusCircleIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

interface Props {
  button: React.ReactNode
}

const PostsMenu = ({ button }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const togglePostModal = () => {
    setIsOpen(prev => !prev)
  }

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        togglePostModal()
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuRef]);

  return (
    <>
      <div onClick={togglePostModal}>
        {button}
      </div>
      {
        isOpen &&
        <div className="fixed z-10 bottom-0 left-0 top-0 right-0 bg-background backdrop-blur-sm md:backdrop-blur-none md:absolute md:bg-transparent">
          <div ref={menuRef} className="absolute z-20 bottom-0 left-0 w-full bg-white border bg-white px-6 pb-16 md:bottom-auto md:top-[100%] md:w-[240px] md:pb-0 xl:w-full">
            <h4 className="flex items-center justify-center border-b py-4 md:hidden">
              <PlusCircleIcon className="size-8" />
              <span className="font-light">기록하기</span>
            </h4>
            <XMarkIcon
              onClick={togglePostModal}
              className="absolute right-6 top-4 size-6 cursor-pointer md:hidden"
            />
            <ul>
              <li className="py-4">
                <PostsMenuItem
                  title="일기 쓰기"
                  link="/archive"
                  icon={<BookOpenIcon className="size-8" />}
                />
              </li>
              <li className="py-4">
                <PostsMenuItem
                  title="커뮤니티 글쓰기"
                  link="/post"
                  icon={<ChatBubbleLeftRightIcon className="size-8" />}
                />
              </li>
            </ul>
          </div>
        </div>
      }
    </>
  );
};
export default PostsMenu;
