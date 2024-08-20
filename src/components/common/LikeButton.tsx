import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';
interface LikeButtonProps {
  isLiked: boolean;
  onClick: () => void;
}

const LikeButton = ({ isLiked, onClick }: LikeButtonProps) => {
  return (
    <>
      {isLiked ? (
        <button
          onClick={onClick}
          className="group fixed bottom-32 right-10 rounded-full bg-white p-3 text-red-500 shadow-lg"
        >
          <SolidHeartIcon className="size-8 transition duration-300 group-hover:scale-105" />
        </button>
      ) : (
        <button
          onClick={onClick}
          className="group fixed bottom-32 right-10 rounded-full bg-white p-3 text-black shadow-lg"
        >
          <OutlineHeartIcon className="size-8 transition duration-300 group-hover:scale-105" />
        </button>
      )}
    </>
  );
};

export default LikeButton;
