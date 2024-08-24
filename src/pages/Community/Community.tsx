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
      <ul className="flex justify-center gap-3 py-10 font-light">
        <li
          className={`${location.pathname.includes('posts') ? 'border-b-2 border-black font-medium' : 'font-light'}`}
        >
          <Link to={ROUTES.POSTS}>커뮤니티</Link>
        </li>
        <li
          className={`${location.pathname.includes('archive') ? 'border-b-2 border-black font-medium' : 'font-light'}`}
        >
          <Link to={ROUTES.ARCHIVE_DETAIL}>일기</Link>
        </li>
      </ul>
      <table className="w-full border-t border-black">
        <tbody>
          {commnunityData &&
            commnunityData.map((item, index) => (
              <Post
                key={index}
                home={item.home_team_id}
                away={item.away_team_id}
                createdAt={item.created_at}
                title={item.title}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Community;
