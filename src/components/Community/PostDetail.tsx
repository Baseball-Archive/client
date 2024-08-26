import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCommunityComment } from '../../hooks/useArchiveComments';
import { useCommunityLike } from '../../hooks/useLike';
import { TeamScheme } from '../../types/TeamScheme';
import { convertTeamNameToEnglish } from '../../utils/convertTeamNameToEnglish';
import { formatDate } from '../../utils/format';
import formatTimeDifference from '../../utils/formatTimeDifference';
import Badge from '../common/Badge';
import LikeButton from '../common/LikeButton';
import AddComment from './Comment/AddComment';
import CommunityComment from './Comment/CommunityComment';

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
  } = postDetail;
  const { id: boardId } = useParams();

  const [isLiked, setIsLiked] = useState(false);
  const { data: communityComment } = useCommunityComment(boardId as string);
  const { addLike, subLike } = useCommunityLike(Number(boardId));
  const handleLike = (isLiked: boolean) => {
    if (isLiked === true) {
      subLike();
    } else if (isLiked === false) {
      addLike();
    }
    setIsLiked((prev) => !prev);
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
          <p className="text-sm font-thin text-gray-500">
            {formatTimeDifference(created_at)}
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
      {communityComment && communityComment.length > 0 ? (
        communityComment
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((comment) => (
            <CommunityComment key={comment.id} comment={comment} />
          ))
      ) : (
        <></>
      )}
      <AddComment />
      <LikeButton
        onClick={() => handleLike(isLiked)}
        isLiked={isLiked}
        likeCount={likes}
      />
    </div>
  );
};

export default PostDetail;
