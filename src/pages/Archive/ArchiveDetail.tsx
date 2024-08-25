import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ArchiveAddComment from '../../components/Archive/ArchiveDetail/ArchiveAddComment';
import ArchiveComment from '../../components/Archive/ArchiveDetail/ArchiveComment';
import ArchiveContent from '../../components/Archive/ArchiveDetail/ArchiveContent';
import LikeButton from '../../components/common/LikeButton';
import useArchiveComment from '../../hooks/useArchiveComments';
import useArchiveDetail from '../../hooks/useArchiveContent';
import { useLike } from '../../hooks/useLike';
import type { ArchiveContent as ArchiveContentType } from '../../types/Archive';

const ArchiveDetail = () => {
  const { id: archiveId } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const { archiveContent } = useArchiveDetail(archiveId as string);
  const { archiveComment } = useArchiveComment(archiveId as string);
  const { addLike, subLike } = useLike(Number(archiveId));

  const handleLike = (isLiked: boolean) => {
    if (isLiked === true) {
      subLike();
    } else if (isLiked === false) {
      addLike();
    }
  };
  return (
    <div className="relative mb-32 h-full w-full pt-7">
      <ArchiveContent ArchiveContent={archiveContent as ArchiveContentType} />
      <div className="mt-8 border-t-2">
        {archiveComment && archiveComment.length > 0 ? (
          archiveComment
            .slice()
            .reverse()
            .map((comment) => (
              <ArchiveComment key={comment.id} comment={comment} />
            ))
        ) : (
          <div className="flex justify-center">댓글을 작성해주세요.</div>
        )}
        <ArchiveAddComment />
      </div>
      <LikeButton onClick={() => handleLike(isLiked)} isLiked={isLiked} />
    </div>
  );
};

export default ArchiveDetail;
