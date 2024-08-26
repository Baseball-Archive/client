import { useParams } from 'react-router-dom';
import Loading from '../../components/common/Loading';
import PostDetail from '../../components/Community/PostDetail';
import useCommunityDetail from '../../hooks/useCommunityDetail';

const CommunityDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data: communityDetail, isLoading, isError } = useCommunityDetail(id);

  if (isLoading) {
    return <Loading />;
  }
  if (isError || !communityDetail) {
    return <div>Post not found</div>;
  }

  return (
    <div className="mb-32">
      <PostDetail postDetail={communityDetail} />
      {/* {filteredComment.slice().map((comment) => (
        <Comment 
        key={comment.id}
        comment={comment}
        />
        ))}
      {id && <AddComment boardId={id} />} */}
    </div>
  );
};

export default CommunityDetail;
