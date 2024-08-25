import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { TeamScheme } from '../../types/TeamScheme';
import Badge from '../common/Badge';
import { convertTeamNameToEnglish } from '../../utils/convertTeamNameToEnglish';
import { ICommnunityData } from '../../pages/Community/Community';
import {
  HeartIcon as OutlineHeartIcon,
  ChatBubbleOvalLeftIcon,
} from '@heroicons/react/24/outline';

interface Props {
  post: ICommnunityData;
}

const Post = ({ post }: Props) => {
  const navigate = useNavigate();
  const {
    id,
    home_team_name,
    away_team_name,
    title,
    created_at,
    nickname,
    my_team_name,
    likes,
    comments,
  } = post;
  return (
    <tr
      onClick={() => {
        navigate(`/posts/${id}`);
      }}
      className="cursor-pointer border-b"
    >
      <td className="w-[30%] py-4 pl-4">
        <p className="flex gap-1">
          <Badge
            scheme={convertTeamNameToEnglish(home_team_name) as TeamScheme}
          />
          <Badge
            scheme={convertTeamNameToEnglish(away_team_name) as TeamScheme}
          />
        </p>
        <p className="pt-2 text-sm text-slate-400">
          {dayjs(created_at).format('YYYY.MM.DD')}
        </p>
      </td>
      <td className="flex w-[50%] py-4 text-xl font-bold">{title}</td>
      <td className="w-[20%] py-4 pr-4 font-light">
        <p className="flex justify-end gap-2">
          {my_team_name && (
            <Badge
              small={true}
              scheme={convertTeamNameToEnglish(my_team_name) as TeamScheme}
            />
          )}
          <span className="text-gray text-sm">{nickname}</span>
        </p>
        <div className="flex items-center justify-end gap-2 pt-2 text-slate-400">
          <p className="flex items-center justify-end">
            <OutlineHeartIcon className="size-4" />
            {likes}
          </p>
          <p className="flex items-center justify-end">
            <ChatBubbleOvalLeftIcon className="size-4" />
            {comments}
          </p>
        </div>
      </td>
    </tr>
  );
};

export default Post;
