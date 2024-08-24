import { useParams } from 'react-router-dom';
import PostDetail from '../../components/Community/PostDetail';
import Comment from '../../components/Community/Comment/Comment';
import AddComment from '../../components/Community/Comment/AddComment';
import { useEffect, useState } from 'react';
import { getCommunityDetail } from '../../apis/community';

const CommunityDetail = () => {
  const { id } = useParams<{ id?: string }>();

  const [commnunityData, setCommnunityData] = useState();

  const fetchData = async () => {
    if (!id) {
      return;
    }
    try {
      const result = await getCommunityDetail(id);
      setCommnunityData(result);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!commnunityData) {
    return <div>Post not found</div>;
  }

  return (
    <div className="mb-32">
      <PostDetail postDetail={commnunityData} />
      {/* {filteredComment.slice().map((comment) => (
        <Comment 
          key={comment.id}
          comment={comment}
        />
      ))} */}

      <AddComment />
    </div>
  );
};

export default CommunityDetail;
