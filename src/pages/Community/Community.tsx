
import { useLocation, useNavigate } from 'react-router-dom';
import Post from '../../components/Community/Post';
import { dummyPost } from './dummyPost';

const Community = () => {
  const location = useLocation();
  const isCommunity = location.pathname === '/posts';
  const isDiary = location.pathname === '/archive';
  const navigate = useNavigate();

  return (
    <div className="mb-24">
      <div className="m-10 flex justify-center">
        <button
          className={`h-12 w-20 ${isCommunity ? 'underline underline-offset-4' : ''}`}
          onClick={() => navigate('/posts')}
        >
          <span className="font-black">커뮤니티</span>
        </button>
        <button
          className={`h-12 w-20 ${isDiary ? 'underline underline-offset-4' : ''}`}
          onClick={() => navigate('/archive')}
        >
          <span className="font-black">일기</span>
        </button>
      </div>
    </div>
  );
};

export default Community;
