import Post, { PostType } from "../../components/Community/Post";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const dummyPost: PostType[] = [
  {
    id: 1,
    match_date: "2024.01.01",
    home_team_name: "kia",
    away_team_name: "samsung",
    review_short: "재미있었다",
    user_id: 1,
    likes: 1,
    comments: 0,
  },
  {
    id: 2,
    match_date: "2024.01.02",
    home_team_name: "lg",
    away_team_name: "doosan",
    review_short: "즐거웠다",
    user_id: 2,
    likes: 2,
    comments: 0,
  },
]

const Community = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    if (location.pathname === '/posts') {
      setCurrentPage('community');
    } else if (location.pathname === '/archive') {
      setCurrentPage('archive');
    }
  }, [location]);

  return (
    <div>
      <div className="m-10 flex justify-center">
        <button className={`w-20 h-12 ${currentPage === 'community' ? 'underline underline-offset-4' : ''}`}>
          <span className="font-black">커뮤니티</span>
        </button>
        <button className={`w-20 h-12 ${currentPage === 'diary' ? 'underline underline-offset-4' : ''}`}>
          <span className="font-black">일기</span>
        </button>
      </div>
      {
        dummyPost.map((post) => (
          <Post 
            key={post.id}
            post={post}
          />
        ))
      }
    </div>
  );
};

export default Community;