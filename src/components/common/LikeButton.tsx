import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';

interface LikeButtonProps {
  isLiked: boolean;
  onClick: () => void;
  likeCount: number;
}

const LikeButton = ({ isLiked, onClick, likeCount }: LikeButtonProps) => {
  return (
    <div className="fixed bottom-32 right-4 flex flex-col items-center">
      <button
        onClick={onClick}
        className={`group rounded-full bg-white p-3 shadow-lg ${
          isLiked ? 'text-red-500' : 'text-black'
        }`}
      >
        {isLiked ? (
          <SolidHeartIcon className="size-8 transition duration-300 group-hover:scale-105" />
        ) : (
          <OutlineHeartIcon className="size-8 transition duration-300 group-hover:scale-105" />
        )}
      </button>
      <span className="text-black">{likeCount}</span>
    </div>
  );
};

export default LikeButton;
