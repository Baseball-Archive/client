import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ArchiveAddComment from '../../components/Archive/ArchiveDetail/ArchiveAddComment';
import ArchiveComment from '../../components/Archive/ArchiveDetail/ArchiveComment';
import ArchiveContent from '../../components/Archive/ArchiveDetail/ArchiveContent';
import LikeButton from '../../components/common/LikeButton';
import useArchiveDetail from '../../hooks/useArchiveDetail';
import { useLike } from '../../hooks/useLike';
import type { Archive, ArchiveDetail } from '../../types/Archive';

const ArchiveDetail = () => {
  const { id: archiveId } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const { getArchiveWithComments } = useArchiveDetail(archiveId as string);
  const { addLike, subLike } = useLike(Number(archiveId));

  const DUMMY_DATA = {
    post: getArchiveWithComments as Archive,
    comments: [
      {
        userId: 1,
        commentId: 2,
        content: '123213',
        updatedAt: '2023-01-01T00:00:00Z', // 올바른 날짜 형식으로 수정
        picUrl: 'asd',
        nickname: '123',
      },
      {
        userId: 1,
        commentId: 2,
        content: '213213',
        updatedAt: '2023-01-01T00:00:00Z', // 올바른 날짜 형식으로 수정
        picUrl: 'asd',
        nickname: '123',
      },
    ],
  };

  const handleLike = (isLiked: boolean) => {
    if (isLiked === true) {
      subLike();
    } else if (isLiked === false) {
      addLike();
    }
  };
  console.log(DUMMY_DATA.post);
  return (
    <div className="relative mb-32 h-full w-full pt-7">
      <ArchiveContent ArchiveContent={DUMMY_DATA.post} />
      <div className="mt-8 border-t-2">
        {DUMMY_DATA.comments.map((comment, index) => (
          <ArchiveComment key={index} comment={comment} />
        ))}
        <ArchiveAddComment />
      </div>
      <LikeButton onClick={() => handleLike(isLiked)} isLiked={isLiked} />
    </div>
  );
};

export default ArchiveDetail;
