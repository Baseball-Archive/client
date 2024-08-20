import ArchiveContent from '../../components/Archive/ArchiveDetail/ArchiveContent';
import LikeButton from '../../components/common/LikeButton';
import AddComment from '../../components/Community/Comment/AddComment';
import Comment from '../../components/Community/Comment/Comment';
import { dummyData } from './dummyArchive';
import { dummyComment } from './dummyComment';

const ArchiveDetail = () => {
  return (
    <div className="container relative mb-32 px-2 pt-7">
      <ArchiveContent ArchiveContent={dummyData} />
      <div className="mt-8 border-t-2">
        {dummyComment.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
        <AddComment />
      </div>
      <LikeButton onClick={() => console.log('test')} isLiked={true} />
    </div>
  );
};

export default ArchiveDetail;
