import { HeartIcon as HeartIconSolid } from '@heroicons/react/20/solid';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
import dayjs from 'dayjs';
import { useState } from 'react';
import { formatDate } from '../../utils/format';
import { getTeamLabelByKey } from '../../utils/getTeamValueByKey';
import Badge from '../common/Badge';
import PostHandleButton from '../common/PostHandleButton';

interface Post {
  away_team_id: number;
  comments: number;
  content: string;
  created_at: string;
  home_team_id: number;
  likes: string;
  match_date: string;
  pic_url: string;
  title: string;
}

interface Props {
  postDetail: Post;
}

const PostDetail = ({ postDetail }: Props) => {
  const {
    away_team_id,
    comments,
    content,
    created_at,
    home_team_id,
    likes,
    match_date,
    pic_url,
    title,
  } = postDetail;

  const [isLikesClicked, setIsLikesClicked] = useState(() => {
    const savedState = localStorage.getItem(`isLikesClicked-${postDetail.id}`);
    return savedState ? JSON.parse(savedState) : false;
  });

  const toggleLikes = () => {
    const newState = !isLikesClicked;
    setIsLikesClicked(newState);
    localStorage.setItem(
      `isLikesClicked-${postDetail.id}`,
      JSON.stringify(newState),
    );
  };

  const handleDelete = () => {
    if (window.confirm('삭제 하시겠습니까?')) {
      alert('삭제 되었습니다.');
    }
  };
  const handleEdit = () => {
    if (window.confirm('수정 하시겠습니까?')) {
      alert('수정 되었습니다.');
    }
  };

  const homeTeam = transformTeamName(home_team_name);
  const awayTeam = transformTeamName(away_team_name);
  const winTeam = transformTeamName(result);

  const user = dummyUser.find((user) => user.id === user_id);
  const cheerTeam = user ? user.cheer_team : undefined;
  const userName = user ? user.user_name : 'Unknown';

  const getPhotoSrc = (id: number) => {
    return `https://picsum.photos/id/${id}/600/600`;
  };

  return (
    <div className="ml-6 mr-6 flex justify-center overflow-hidden bg-white">
      <div className="w-full max-w-lg">
        <div className="border-b-2 border-gray-300 pt-6">
          <div className="flex items-start">
            <div className="pl-2 pr-2 font-bold">{review_short}</div>
            <div className="ml-auto">
              <PostHandleButton onEdit={handleEdit} onDelete={handleDelete} />
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center font-normal text-gray-500">
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden">
                <Badge scheme={cheerTeam as TeamScheme} />
              </div>
              <div className="ml-1 text-sm">{userName}</div>
            </div>
            <div className="text-sm font-thin text-gray-400">{match_date}</div>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-1 border-b border-gray-300 pb-3 text-sm">
          <div className="flex items-start">
            <p className="min-w-[4rem] font-thin text-gray-500">경기 날짜</p>
            <p className="min-w-[4rem] font-bold">{match_date}</p>
          </div>
          <div className="flex items-center">
            <p className="min-w-[4rem] font-thin text-gray-500">승리 팀</p>
            <p className="min-w-[4rem] font-bold">{winTeam.name}</p>
          </div>
          <div className="flex items-center">
            <p className="min-w-[4rem] font-thin text-gray-500">경기장</p>
            <p className="min-w-[4rem] font-bold">{stadium}</p>
          </div>
          <div className="flex items-center">
            <p className="min-w-[4rem] font-thin text-gray-500">날씨</p>
            <p className="min-w-[4rem] font-bold">{weather}</p>
          </div>
          <div className="flex items-center">
            <p className="min-w-[4rem] font-thin text-gray-500">홈</p>
            <p className="min-w-[4rem] font-bold">{homeTeam.name}</p>
          </div>
          <div className="flex items-center">
            <p className="min-w-[4rem] font-thin text-gray-500">어웨이</p>
            <p className="min-w-[4rem] font-bold">{awayTeam.name}</p>
          </div>
        </div>
        <div className="pb-2 pt-6">
          <div>
            <div className="pb-4">
              <img src={getPhotoSrc(photo)} alt="Post Photo" />
            </div>
            <p>{review_long}</p>
          </div>
        </div>
        <div className="flex justify-end border-b border-gray-300 pb-4">
          <button onClick={toggleLikes}>
            <div className="h-[56px] w-[56px] rounded-full border-[1px] shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={isLikesClicked ? 'currentColor' : 'none'}
                viewBox="-6 -6 32 32"
                strokeWidth="1"
                stroke="currentColor"
                className="text-[#DC7B7C]"
                style={{ maxWidth: '48px' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
          </button>
        </div>
        <PostHandleButton onEdit={handleEdit} onDelete={handleDelete} />
      </div>
      <ul className="border-b py-4">
        <li>
          <p className="flex w-[50%]">
            <span className="w-[20%] font-light">경기 날짜</span>
            <span>{formatDate(match_date)}</span>
          </p>
        </li>
        <li className="flex">
          <p className="flex w-[50%]">
            <span className="w-[20%] font-light">홈</span>
            <span>{getTeamLabelByKey(home_team_id)}</span>
          </p>
          <p className="flex w-[50%]">
            <span className="w-[20%] font-light">어웨이</span>
            <span>{getTeamLabelByKey(away_team_id)}</span>
          </p>
        </li>
      </ul>
      <div className="py-4">
        {pic_url && <img src={pic_url} alt="Post Photo" />}
        <p className="py-2">{content}</p>
      </div>
      <div className="absolute bottom-[40%] right-[10%] h-[50px] w-[50px] rounded-full border border-slate-100 p-2 shadow-lg">
        <button onClick={toggleLikes}>
          {isLikesClicked ? (
            <HeartIconOutline className="size-8 text-[#DC7B7C]" />
          ) : (
            <HeartIconSolid className="size-8 text-[#DC7B7C]" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
