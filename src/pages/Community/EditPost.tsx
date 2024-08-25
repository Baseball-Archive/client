import { useParams } from 'react-router-dom';
import PostInfo from '../../components/Community/AddPost/PostInfo';
import useCommunityDetail from '../../hooks/useCommunityDetail';
import Loading from '../../components/common/Loading';

const EditPost = () => {
  const { id: communityId } = useParams<{ id: string }>();

  const { data: communityDetail, isLoading } = useCommunityDetail(communityId);
  console.log(communityId, communityDetail);

  if (isLoading) return <Loading />;

  return (
    <div className="container mb-6 flex justify-center overflow-auto bg-white">
      <div className="flex w-full max-w-md flex-col overflow-auto">
        <PostInfo communityDetail={communityDetail} />
      </div>
    </div>
  );
};
export default EditPost;
