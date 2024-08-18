import { useParams } from 'react-router-dom';
import PostDetail from '../../components/Community/PostDetail';
import { dummyPost } from './dummyPost';
import Comment from '../../components/Community/Comment/Comment';
import AddComment from '../../components/Community/Comment/AddComment';
import { dummyComment } from './dummyComment';

const CommunityDetail = () => {

  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id || '', 10);
  const post = dummyPost.find(post => post.id === postId);

  const filteredComment = dummyComment.filter(comment => comment.post_id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="mb-24">
      <PostDetail postDetail={post} />
      {filteredComment.slice().map((comment) => (
        <Comment 
          key={comment.id}
          comment={comment}
        />
      ))}
      <AddComment />
    </div>
  );
};

export default CommunityDetail;
