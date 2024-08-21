import { useState } from 'react';
import ArchiveContent from '../../components/Archive/ArchiveDetail/ArchiveContent';
import LikeButton from '../../components/common/LikeButton';
import AddComment from '../../components/Community/Comment/AddComment';
import Comment from '../../components/Community/Comment/Comment';
import { dummyData } from './dummyArchive';
import { dummyComment } from './dummyComment';

const ARCHIVE_DETAIL = {
  post: dummyData,
  comments: dummyComment,
};

const ArchiveDetail = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked((prev) => !prev);
  };
  return (
    <div className="relative mb-32 h-full w-full pt-7">
      <ArchiveContent ArchiveContent={dummyData} />
      <div className="mt-8 border-t-2">
        {dummyComment.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
        <AddComment />
      </div>
      <LikeButton onClick={() => handleLike()} isLiked={isLiked} />
    </div>
  );
};

export default ArchiveDetail;
