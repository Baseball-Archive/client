import PostHandleButton from '../common/PostHandleButton';
import { useState } from 'react';
import dayjs from 'dayjs';
import { getTeamLabelByKey } from '../../utils/getTeamValueByKey';
import { formatDate } from '../../utils/format';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/20/solid';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';

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
      <div className="flex justify-between border-b border-black py-4">
        <div>
          <h2 className="text-xl">{title}</h2>
          <p className="text-sm font-thin text-gray-500">
            {formatDate(created_at)}
          </p>
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
