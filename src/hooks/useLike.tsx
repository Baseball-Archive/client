import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addArchiveLike, subArchiveLike } from '../apis/archive';
import { addCommunityLike, subCommunityLike } from '../apis/community';
import { showToast } from '../components/common/Toast';

export const useLike = (archiveId: number) => {
  const queryClient = useQueryClient();

  const { mutate: addLike } = useMutation({
    mutationFn: () => addArchiveLike(archiveId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ArchiveContent'] });
      console.log('좋아요 추가 성공');
    },
    onError: () => {
      showToast('좋아요 추가에 실패했습니다.', 'error');
    },
  });

  const { mutate: subLike } = useMutation({
    mutationFn: () => subArchiveLike(archiveId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ArchiveContent'] });
      console.log('좋아요 삭제 성공');
    },
    onError: () => {
      showToast('좋아요 취소에 실패했습니다.', 'error');
    },
  });

  return { addLike, subLike };
};

export const useCommunityLike = (boardId: number) => {
  const queryClient = useQueryClient();

  const { mutate: addLike } = useMutation({
    mutationFn: () => addCommunityLike(boardId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['communityDetail'] });
      console.log('좋아요 추가 성공');
    },
    onError: () => {
      showToast('좋아요 추가에 실패했습니다.', 'error');
    },
  });

  const { mutate: subLike } = useMutation({
    mutationFn: () => subCommunityLike(boardId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['communityDetail'] });
      console.log('좋아요 삭제 성공');
    },
    onError: () => {
      showToast('좋아요 취소에 실패했습니다.', 'error');
    },
  });

  return { addLike, subLike };
};
