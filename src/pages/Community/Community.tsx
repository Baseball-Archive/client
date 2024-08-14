import Post from "../../components/Community/Post";
import { useLocation } from 'react-router-dom';
import { dummyPost } from "./dummyPost";

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