
import Post from '../../components/Community/Post';
import { Link, useLocation } from 'react-router-dom';
import { getCommunity } from '../../apis/community';
import { useQuery } from '@tanstack/react-query';
import ROUTES from '../../constants/router';

export interface ICommnunityData {
  away_team_id: number;
  created_at: string;
  home_team_id: number;
  title: string;
}


const Community = () => {
  const location = useLocation();

  const { data: commnunityData } = useQuery<ICommnunityData[], Error>({
    queryKey: ['community'],
    queryFn: () => getCommunity(),
  });

  return (
    <div className="mb-24">
      <div className="m-10 flex justify-center">
        <button
          className={`h-12 w-20 ${isCommunity ? 'underline underline-offset-4' : ''}`}
        >
          <span className="font-black">커뮤니티</span>
        </button>
        <button
          className={`h-12 w-20 ${isDiary ? 'underline underline-offset-4' : ''}`}
        >
          <span className="font-black">일기</span>
        </button>
      </div>
      <div>
        {dummyPost
          .slice()
          .reverse()
          .map((post) => (
            <Post key={post.id} post={post} />
          ))}
      </div>

    </div>
  );
};

export default Community;
