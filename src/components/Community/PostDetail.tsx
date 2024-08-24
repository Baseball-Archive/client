import PostHandleButton from '../common/PostHandleButton';
import { useState } from 'react';
import dayjs from 'dayjs';
import { getTeamLabelByKey } from '../../utils/getTeamValueByKey';

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

  return (
    <div>
      <div className="border-b-2 border-gray-300 pt-6">
        <div className="flex items-start">
          <div className="pl-2 pr-2 font-bold">{title}</div>
          <div className="ml-auto">
            <PostHandleButton onEdit={handleEdit} onDelete={handleDelete} />
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center font-normal text-gray-500">
            {/* <div className="flex items-center justify-center w-12 h-12 relative overflow-hidden">
              <Badge scheme={cheerTeam as TeamScheme} />
            </div> */}
            {/* <div className="ml-1 text-sm">{userName}</div> */}
          </div>
          <div className="text-sm font-thin text-gray-400">
            {dayjs(created_at).format('YYYY.MM.DD')}
          </div>
        </div>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-1 border-b border-gray-300 pb-3 text-sm">
        <div className="flex items-start">
          <p className="min-w-[4rem] font-thin text-gray-500">경기 날짜</p>
          <p className="min-w-[4rem] font-bold">
            {dayjs(match_date).format('YYYY.MM.DD')}
          </p>
        </div>
        {/* <div className="flex items-center">
          <p className="text-gray-500 font-thin min-w-[4rem]">승리 팀</p>
          <p className="font-bold min-w-[4rem]">{winTeam.name}</p>
        </div> */}
        {/* <div className="flex items-center">
          <p className="text-gray-500 font-thin min-w-[4rem]">경기장</p>
          <p className="font-bold min-w-[4rem]">{stadium}</p>
        </div> */}
        {/* <div className="flex items-center">
          <p className="text-gray-500 font-thin min-w-[4rem]">날씨</p>
          <p className="font-bold min-w-[4rem]">{weather}</p>
        </div> */}
        <div className="flex items-center">
          <p className="min-w-[4rem] font-thin text-gray-500">홈</p>
          <p className="min-w-[4rem] font-bold">
            {getTeamLabelByKey(home_team_id)}
          </p>
        </div>
        <div className="flex items-center">
          <p className="min-w-[4rem] font-thin text-gray-500">어웨이</p>
          <p className="min-w-[4rem] font-bold">
            {getTeamLabelByKey(away_team_id)}
          </p>
        </div>
      </div>
      <div className="pb-2 pt-6">
        <div>
          {pic_url && (
            <div className="pb-4">
              <img src={pic_url} alt="Post Photo" />
            </div>
          )}
          <p>{content}</p>
        </div>
      </div>
      <div className="flex justify-end border-b border-gray-300 pb-4">
        <button onClick={toggleLikes}>
          <div className="h-[56px] w-[56px] rounded-full border-[1px] shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isLikesClicked ? 'currentColor' : 'none'}
              viewBox="-6 -6 32 32"
              stroke-width="1"
              stroke="currentColor"
              className="text-[#DC7B7C]"
              style={{ maxWidth: '48px' }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
