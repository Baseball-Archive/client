import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getCommunity } from '../../apis/community';
import Loading from '../../components/common/Loading';
import Post from '../../components/Community/Post';

export interface ICommunityData {
  away_team_id: number;
  created_at: string;
  home_team_id: number;
  title: string;
}

const Community = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'community' | 'diary'>(
    'community',
  );

  const {
    data: communityData,
    isLoading,
    isError,
  } = useQuery<ICommunityData[], Error>({
    queryKey: ['community'],
    queryFn: getCommunity,
  });
  console.log(communityData);

  if (isLoading) return <Loading />;

  return (
    <div className="mb-24">
      <div className="m-10 flex justify-center">
        <button
          className={`h-12 w-20 ${activeTab === 'community' ? 'underline underline-offset-4' : ''}`}
          onClick={() => setActiveTab('community')}
        >
          <span className="font-black">커뮤니티</span>
        </button>
        <button
          className={`h-12 w-20 ${activeTab === 'diary' ? 'underline underline-offset-4' : ''}`}
          onClick={() => setActiveTab('diary')}
        >
          <span className="font-black">일기</span>
        </button>
      </div>
      <div>
        {communityData?.map((post) => (
          <Post
            key={post.created_at}
            away={post.away_team_id}
            createdAt={post.created_at}
            home={post.home_team_id}
            title={post.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Community;
