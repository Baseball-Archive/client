import { useQuery } from '@tanstack/react-query';
import { Link, useLocation } from 'react-router-dom';
import { getCommunity } from '../../apis/community';
import PublicPost from '../../components/common/PublicPost';
import ROUTES from '../../constants/router';
import type { Post as PostType } from '../../types/Post';

export interface ICommnunityData {
  id: number;
  home_team_name: string;
  away_team_name: string;
  title: string;
  created_at: string;
  nickname: string;
  my_team_name: string;
  likes: number;
  comments: number;
}

const Community = () => {
  const location = useLocation();

  const { data: commnunityData } = useQuery<PostType[], Error>({
    queryKey: ['community'],
    queryFn: () => getCommunity(),
  });

  return (
    <div className="mb-24">
      <ul className="flex justify-center gap-3 py-10 font-light">
        <li
          className={`${location.pathname.includes('posts') ? 'border-b-2 border-black font-medium' : 'font-light'}`}
        >
          <Link to={ROUTES.POSTS}>커뮤니티</Link>
        </li>
        <li
          className={`${location.pathname.includes('archive') ? 'border-b-2 border-black font-medium' : 'font-light'}`}
        >
          <Link to={ROUTES.PUBLIC_ARCHIVES}>일기</Link>
        </li>
      </ul>
      <table className="w-full border-black">
        {commnunityData &&
          commnunityData.map((item) => (
            <Link to={`/posts/${item.id}`}>
              <PublicPost key={item.id} post={item} />
            </Link>
          ))}
      </table>
    </div>
  );
};

export default Community;
