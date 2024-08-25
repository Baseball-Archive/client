import PostHandleButton from '../common/PostHandleButton';
import { useState } from 'react';
import { formatDate } from '../../utils/format';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/20/solid';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
import Badge from '../common/Badge';
import { convertTeamNameToEnglish } from '../../utils/convertTeamNameToEnglish';
import { TeamScheme } from '../../types/TeamScheme';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { deleteCommunity } from '../../apis/community';
import { useNavigate } from 'react-router-dom';

export interface Post {
  id: number;
  match_date: string;
  home_team_name: string;
  away_team_name: string;
  title: string;
  content: string;
  pic_url: string;
  created_at: string;
  nickname: string;
  my_team_name: string;
  likes: number;
  comments: number;
}

interface Props {
  postDetail: Post;
}

const PostDetail = ({ postDetail }: Props) => {
  const {
    id,
    match_date,
    home_team_name,
    away_team_name,
    title,
    content,
    pic_url,
    created_at,
    nickname,
    my_team_name,
    likes,
    comments,
  } = postDetail;

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [isLikesClicked, setIsLikesClicked] = useState(() => {
    const savedState = localStorage.getItem(`isLikesClicked-${id}`);
    return savedState ? JSON.parse(savedState) : false;
  });

  const deleteMutation = useMutation({
    mutationFn: async () => {
      return await deleteCommunity(String(id));
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['community'] });
      navigate('/posts');
      console.log('Success:', data);
    },
    onError: (error) => {
      console.error('Error:', error);
    },
  });
  const toggleLikes = () => {
    const newState = !isLikesClicked;
    setIsLikesClicked(newState);
    localStorage.setItem(`isLikesClicked-${id}`, JSON.stringify(newState));
  };

  const handleDelete = () => {
    if (window.confirm('삭제 하시겠습니까?')) {
      deleteMutation.mutate();
    }
  };
  const handleEdit = () => {
    if (window.confirm('수정 하시겠습니까?')) {
      navigate(`/post/${id}`);
    }
  };

  return (
    <div>
      <div className="flex justify-between border-b border-black py-4">
        <div className="flex flex-col justify-between">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="font-thin text-gray-500">
            {my_team_name && (
              <Badge
                small={true}
                scheme={convertTeamNameToEnglish(my_team_name) as TeamScheme}
              />
            )}
            {nickname}
          </p>
        </div>
        <div className="text-right">
          <PostHandleButton onEdit={handleEdit} onDelete={handleDelete} />
          <p className="text-sm font-thin text-gray-500">
            {formatDate(created_at)}
          </p>
        </div>
      </div>
      <ul className="border-b py-4">
        <li>
          <p className="flex w-full md:w-[50%]">
            <span className="w-[20%] font-light">경기 날짜</span>
            <span>{formatDate(match_date)}</span>
          </p>
        </li>
        <li className="flex flex-col md:flex-row">
          <p className="flex w-full md:w-[50%]">
            <span className="w-[20%] font-light">홈</span>
            <span>{home_team_name}</span>
          </p>
          <p className="flex w-full md:w-[50%]">
            <span className="w-[20%] font-light">어웨이</span>
            <span>{away_team_name}</span>
          </p>
        </li>
      </ul>
      <div className="py-4">
        {pic_url && <img src={pic_url} alt="Post Photo" />}
        <p className="py-2">{content}</p>
      </div>
      <div className="jutify-center fixed bottom-[30%] right-[10%] z-30 flex h-[50px] w-[50px] items-center rounded-full border border-slate-100 bg-white p-2 shadow-lg md:absolute">
        <button
          onClick={toggleLikes}
          className="jutify-center flex items-center"
        >
          {isLikesClicked ? (
            <HeartIconOutline className="size-6 text-[#DC7B7C]" />
          ) : (
            <HeartIconSolid className="size-6 text-[#DC7B7C]" />
          )}
          <span className="text-gray-500">{likes}</span>
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
