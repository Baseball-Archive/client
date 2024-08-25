import { useParams } from 'react-router-dom';
import PostDetail from '../../components/Community/PostDetail';
import Comment, {
  CommentType,
} from '../../components/Community/Comment/Comment';
import AddComment from '../../components/Community/Comment/AddComment';
import Loading from '../../components/common/Loading';
import useCommunityDetail from '../../hooks/useCommunityDetail';
import { useQuery } from '@tanstack/react-query';
import { getCommunityComments } from '../../apis/comment';

const CommunityDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data: communityDetail, isLoading, isError } = useCommunityDetail(id);

  const { data: communityComment } = useQuery<CommentType[]>({
    queryKey: ['communityComment', id],
    queryFn: () => {
      if (!id) {
        throw new Error('ID is undefined');
      }
      return getCommunityComments(id);
    },
    enabled: !!id,
  });

  if (isLoading) {
    return <Loading />;
  }
  if (isError || !communityDetail) {
    return <div>Post not found</div>;
  }

  return (
    <div className="mb-32">
      <PostDetail postDetail={communityDetail} />
      {communityComment &&
        communityComment.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      {id && <AddComment boardId={id} />}
    </div>
  );
};

export default CommunityDetail;
