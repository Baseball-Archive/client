import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import {
  addArchiveLike,
  getArchiveDetailWithComments,
} from '../../apis/archive';
import ArchiveAddComment from '../../components/Archive/ArchiveDetail/ArchiveAddComment';
import ArchiveComment from '../../components/Archive/ArchiveDetail/ArchiveComment';
import ArchiveContent from '../../components/Archive/ArchiveDetail/ArchiveContent';
import LikeButton from '../../components/common/LikeButton';
import Loading from '../../components/common/Loading';
import type { Archive, ArchiveDetail } from '../../types/Archive';

const ArchiveDetail = () => {
  const [isLiked, setIsLiked] = useState(false);

  const {
    data: archiveWithCommentsQuery,
    error: archiveWithCommentError,
    isLoading,
  } = useQuery<ArchiveDetail>({
    queryKey: ['archiveWithComments'],
    queryFn: getArchiveDetailWithComments,
  });
  const { mutate: addArchiveLikeMutate } = useMutation({
    mutationFn: addArchiveLike,
    onSuccess: () => {
      setIsLiked((prev) => !prev);
    },
    onError: () => {
      alert('좋아요 실패');
    },
  });
  const { mutate: subArchiveLikeMutate } = useMutation({
    mutationFn: addArchiveLike,
    onSuccess: () => {
      setIsLiked((prev) => !prev);
    },
    onError: () => {
      alert('좋아요 취소 실패');
    },
  });

  const handleLike = (isLiked: boolean) => {
    if (isLiked === true) {
      addArchiveLikeMutate(archiveWithCommentsQuery?.post.id as number);
    } else if (isLiked === false) {
      subArchiveLikeMutate(archiveWithCommentsQuery?.post.id as number);
    }
  };

  if (isLoading) return <Loading />;
  if (archiveWithCommentError)
    return <div>error:{archiveWithCommentError.message}</div>;

  return (
    <div className="relative mb-32 h-full w-full pt-7">
      <ArchiveContent
        ArchiveContent={archiveWithCommentsQuery?.post as Archive}
      />
      <div className="mt-8 border-t-2">
        {archiveWithCommentsQuery?.comments.map((comment, index) => (
          <ArchiveComment key={index} comment={comment} />
        ))}
        <ArchiveAddComment />
      </div>
      <LikeButton onClick={() => handleLike(isLiked)} isLiked={isLiked} />
    </div>
  );
};

export default ArchiveDetail;
