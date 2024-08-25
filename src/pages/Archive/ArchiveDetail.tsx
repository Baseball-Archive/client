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
  const { archiveContent, isError, isLoading, refetch } = useArchiveDetail(
    archiveId as string,
  );
  const { archiveComment } = useArchiveComment(archiveId as string);
  const { addLike, subLike } = useLike(Number(archiveId));

  const handleRefetch = () => {
    refetch();
  };

  const handleLike = (isLiked: boolean) => {
    if (isLiked === true) {
      subLike();
    } else if (isLiked === false) {
      addLike();
    }
    setIsLiked((prev) => !prev);
  };
  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>오류가 발생했습니다.</div>;
  return (
    <div className="relative mb-32 h-full w-full pt-7">
      <ArchiveContent
        onError={handleRefetch}
        ArchiveContent={archiveContent as ArchiveContentType}
      />
      <div className="mt-8 border-t-2">
        {archiveComment && archiveComment.length > 0 ? (
          archiveComment
            .sort((a, b) => parseInt(a.id) - parseInt(b.id))
            .map((comment) => (
              <ArchiveComment key={comment.id} comment={comment} />
            ))
        ) : (
          <></>
        )}
        <ArchiveAddComment />
      </div>
      <LikeButton onClick={() => handleLike(isLiked)} isLiked={isLiked} />
    </div>
  );
};

export default ArchiveDetail;
