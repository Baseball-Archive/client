import Post, { PostType } from "../../components/Community/Post";
import { useLocation } from 'react-router-dom';

const dummyPost: PostType[] = [
  {
    id: 1,
    match_date: "2024.01.01",
    home_team_name: "kia",
    away_team_name: "samsung",
    review_short: "재미있었다",
    user_id: 1,
    likes: 0,
    comments: 1,
  },
  {
    id: 2,
    match_date: "2024.01.02",
    home_team_name: "lg",
    away_team_name: "doosan",
    review_short: "재미있었다 재미있었다",
    user_id: 2,
    likes: 1,
    comments: 2,
  },
  {
    id: 3,
    match_date: "2024.01.03",
    home_team_name: "ssg",
    away_team_name: "kt",
    review_short: "재미있었다 재미있었다 재미있었다",
    user_id: 3,
    likes: 20,
    comments: 3,
  },
  {
    id: 4,
    match_date: "2024.01.04",
    home_team_name: "nc",
    away_team_name: "hanhwa",
    review_short: "재미있었다 재미있었다 재미있었다 재미있었다",
    user_id: 1,
    likes: 300,
    comments: 4,
  },
  {
    id: 5,
    match_date: "2024.01.05",
    home_team_name: "lotte",
    away_team_name: "kiwoom",
    review_short: "재미있었다 재미있었다 재미있었다 재미있었다 재미있었다",
    user_id: 2,
    likes: 4000,
    comments: 5,
  },
  {
    id: 1,
    match_date: "2024.01.01",
    home_team_name: "samsung",
    away_team_name: "kia",
    review_short: "재미있었다",
    user_id: 3,
    likes: 1,
    comments: 0,
  },
  {
    id: 2,
    match_date: "2024.01.02",
    home_team_name: "doosan",
    away_team_name: "lg",
    review_short: "재미있었다 재미있었다",
    user_id: 1,
    likes: 2,
    comments: 1,
  },
  {
    id: 3,
    match_date: "2024.01.03",
    home_team_name: "kt",
    away_team_name: "ssg",
    review_short: "재미있었다 재미있었다 재미있었다",
    user_id: 2,
    likes: 3,
    comments: 20,
  },
  {
    id: 4,
    match_date: "2024.01.04",
    home_team_name: "hanhwa",
    away_team_name: "nc",
    review_short: "재미있었다 재미있었다 재미있었다 재미있었다",
    user_id: 3,
    likes: 4,
    comments: 300,
  },
  {
    id: 5,
    match_date: "2024.01.05",
    home_team_name: "kiwoom",
    away_team_name: "lotte",
    review_short: "재미있었다 재미있었다 재미있었다 재미있었다 재미있었다",
    user_id: 1,
    likes: 5,
    comments: 4000,
  },
];

const Community = () => {
  const location = useLocation();
  const isCommunity = location.pathname === '/posts';
  const isDiary = location.pathname === '/archive';

  return (
    <div className="mb-24">
      <div className="m-10 flex justify-center">
        <button className={`w-20 h-12 ${isCommunity ? 'underline underline-offset-4' : ''}`}>
          <span className="font-black">커뮤니티</span>
        </button>
        <button className={`w-20 h-12 ${isDiary ? 'underline underline-offset-4' : ''}`}>
          <span className="font-black">일기</span>
        </button>
      </div>
      <div>
        {dummyPost.slice().reverse().map((post) => (
          <Post 
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </div>
  );
};

export default Community;