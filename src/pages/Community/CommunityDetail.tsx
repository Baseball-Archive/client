import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getCommunityDetail } from '../../apis/community';
import Loading from '../../components/common/Loading';
import AddComment from '../../components/Community/Comment/AddComment';
import PostDetail from '../../components/Community/PostDetail';

const CommunityDetail = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: communityDetail,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['communityDetail', id],
    queryFn: async () => {
      if (!id) {
        throw new Error('Board Id가 없습니다.');
      }
      const data = await getCommunityDetail(id);
      if (!data) {
        throw new Error('Data가 없습니다.');
      }
      return data;
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
      {/* {filteredComment.slice().map((comment) => (
        <Comment 
        key={comment.id}
        comment={comment}
        />
        ))} */}
      {id && <AddComment boardId={id} />}
    </div>
  );
};

export default CommunityDetail;
