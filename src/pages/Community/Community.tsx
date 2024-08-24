import Post from '../../components/Community/Post';
import { useLocation } from 'react-router-dom';
import { getCommunity } from '../../apis/community';
import { useEffect, useState } from 'react';

export interface ICommnunityData {
  away_team_id: number;
  created_at: string;
  home_team_id: number;
  title: string;
}

const Community = () => {
  const location = useLocation();
  const isCommunity = location.pathname === '/posts';
  const isDiary = location.pathname === '/archive';
  const [commnunityData, setCommnunityData] = useState<ICommnunityData[]>([]);

  const fetchData = async () => {
    try {
      const result = await getCommunity();
      setCommnunityData(result);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      {commnunityData.map((item, index) => (
        <Post
          key={index}
          home={item.home_team_id}
          away={item.away_team_id}
          createdAt={item.created_at}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default Community;
