import {
  PlusCircleIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import PostsMenuItem from "./PostsMenuItem";

interface Props {
  onClick: (event: React.MouseEvent<HTMLLIElement | SVGSVGElement>) => void;
}

const PostsMenu = ({ onClick }: Props) => {
  return (
    <div className="fixed bottom-0 left-0 w-full border bg-white px-6 pb-16 md:absolute md:bottom-auto md:top-[100%] md:w-[240px] md:pb-0 xl:w-full">
      <h4 className="flex items-center justify-center border-b py-4 md:hidden">
        <PlusCircleIcon className="size-8" />
        <span className="font-light">기록하기</span>
      </h4>
      <XMarkIcon
        onClick={onClick}
        className="absolute right-6 top-4 size-6 cursor-pointer md:hidden"
      />
      <ul>
        <li className="p-4">
          <PostsMenuItem
            title="일기 쓰기"
            link="/addarchive"
            icon={<BookOpenIcon className="size-8" />}
          />
        </li>
        <li className="p-4">
          <PostsMenuItem
            title="커뮤니티 글쓰기"
            link="/post"
            icon={<ChatBubbleLeftRightIcon className="size-8" />}
          />
        </li>
      </ul>
    </div>
  );
};
export default PostsMenu;
