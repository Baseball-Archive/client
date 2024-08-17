import { useParams } from 'react-router-dom';
import PostDetail from '../../components/Community/PostDetail';
import { dummyPost } from './dummyPost';

const CommunityDetail = () => {

  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id || '', 10);
  const post = dummyPost.find(post => post.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="mb-24">
      <PostDetail postDetail={post} />
    </div>
  );
};

export default CommunityDetail;
