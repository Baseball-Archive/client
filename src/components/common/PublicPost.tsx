import { HeartIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import { Post } from '../../types/Post';
import { TeamScheme } from '../../types/TeamScheme';
import { convertTeamNameToEnglish } from '../../utils/convertTeamNameToEnglish';
import formatTimeDifference from '../../utils/formatTimeDifference';
import Badge from './Badge';

interface Props {
  post: Post;
}

const PublicPost = ({ post }: Props) => {
  const {
    myTeamName,
    homeTeamName,
    awayTeamName,
    createdAt,
    likes,
    comments,
    nickname,
    title,
  } = post;

  return (
    <div className="my-3 ml-6 mr-6 flex justify-center overflow-hidden bg-white">
      <div className="w-full">
        <div className="border-t-2 border-gray-300 pt-3">
          <div className="flex items-center gap-1">
            <Badge
              scheme={convertTeamNameToEnglish(homeTeamName) as TeamScheme}
            />
            <Badge
              scheme={convertTeamNameToEnglish(awayTeamName) as TeamScheme}
            />
            <div className="w-64 overflow-hidden text-ellipsis whitespace-nowrap pl-6 font-bold">
              {title}
            </div>
            <div className="ml-auto">
              <div className="text-sm font-thin text-gray-400">
                {formatTimeDifference(createdAt)}
              </div>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-2 font-normal text-gray-500">
              <div className="relative flex items-center justify-center overflow-hidden">
                <Badge
                  small={true}
                  scheme={convertTeamNameToEnglish(myTeamName) as TeamScheme}
                />
              </div>
              <div className="text-sm text-black">{nickname}</div>
            </div>
            <div className="flex items-center">
              <div className="flex h-10 w-16 items-center">
                <ChatBubbleOvalLeftIcon className="size-6" />
                <span className="ml-1">{comments}</span>
              </div>
              <div className="flex h-10 w-16 items-center">
                <HeartIcon className="size-6" />

                <span className="ml-1">{likes}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicPost;
