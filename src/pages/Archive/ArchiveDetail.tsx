import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  addArchiveLike,
  getArchiveDetailWithComments,
} from '../../apis/archive';
import ArchiveAddComment from '../../components/Archive/ArchiveDetail/ArchiveAddComment';
import ArchiveComment from '../../components/Archive/ArchiveDetail/ArchiveComment';
import ArchiveContent from '../../components/Archive/ArchiveDetail/ArchiveContent';
import LikeButton from '../../components/common/LikeButton';
import Loading from '../../components/common/Loading';
import useArchiveDetail from '../../hooks/useArchiveDetail';
import type { Archive, ArchiveDetail } from '../../types/Archive';

const ArchiveDetail = () => {
  const { id: archiveId } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const { getArchiveWithComments, getArchiveError } = useArchiveDetail(
    archiveId as string,
  );

  const DUMMY_DATA = {
    post: getArchiveWithComments || {
      matchDate: '2024-08-05T15:00:00.000Z',
      homeTeamId: 2,
      awayTeamId: 9,
      title: 'edittest!!!',
      content: 'asd@@@@@@@@@!!!!!',
      picUrl:
        'https://baseball-archive-team.s3.ap-northeast-2.amazonaws.com/profile-images/517fe222-c1cb-407a-bf10-86369bfc5443-hongje.PNG',
      createdAt: '2024-08-24T08:25:15.292Z',
      userUid: 'Nd0BhLPx3ded9xt8XgMwNV1UQ1E3',
      likes: '0',
      comments: '0',
    },
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

  // const { mutate: addArchiveLikeMutate } = useMutation({
  //   mutationFn: addArchiveLike,
  //   onSuccess: () => {
  //     setIsLiked((prev) => !prev);
  //   },
  //   onError: () => {
  //     alert('좋아요 실패');
  //   },
  // });
  // const { mutate: subArchiveLikeMutate } = useMutation({
  //   mutationFn: addArchiveLike,
  //   onSuccess: () => {
  //     setIsLiked((prev) => !prev);
  //   },
  //   onError: () => {
  //     alert('좋아요 취소 실패');
  //   },
  // });

  // const handleLike = (isLiked: boolean) => {
  //   if (isLiked === true) {
  //     addArchiveLikeMutate(archiveWithCommentsQuery?.post.id as number);
  //   } else if (isLiked === false) {
  //     subArchiveLikeMutate(archiveWithCommentsQuery?.post.id as number);
  //   }
  // };

  // if (isLoading) return <Loading />;
  // if (archiveWithCommentError)
  //   return <div>error:{archiveWithCommentError.message}</div>;
  // console.log(getArchiveDetailWithComments(id));
  return (
    <div className="relative mb-32 h-full w-full pt-7">
      <ArchiveContent ArchiveContent={DUMMY_DATA.post} />
      <div className="mt-8 border-t-2">
        {DUMMY_DATA.comments.map((comment, index) => (
          <ArchiveComment key={index} comment={comment} />
        ))}
        <ArchiveAddComment />
      </div>
      {/* <LikeButton onClick={() => handleLike(isLiked)} isLiked={isLiked} /> */}
    </div>
  );
};

export default ArchiveDetail;
