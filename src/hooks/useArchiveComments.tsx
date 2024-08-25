import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getArchiveComments, getCommunityComments } from '../apis/comment';
import { Comment } from '../types/Comment';

// const useArchiveComment = (id: string) => {
//   const { data: archiveComment } = useQuery<Comment[]>({
//     queryKey: ['ArchiveCommnet'],
//     queryFn: () => getArchiveComments(id),
//   });
//   return { archiveComment };
// };

const useArchiveComment = (id: string) => {
  return useQuery<Comment[]>({
    queryKey: ['ArchiveCommnet'],
    queryFn: async () => {
      if (!id) {
        throw new Error('Board Id가 없습니다.');
      }
      const data = await getArchiveComments(id);
      if (!data) {
        throw new Error('Data가 없습니다.');
      }
      return data;
    },
    enabled: !!id,
  });
};
export default useArchiveComment;

export const useCommunityComment = (id: string | undefined) => {
  return useQuery<Comment[]>({
    queryKey: ['CommunityComment'],
    queryFn: async () => {
      if (!id) {
        throw new Error('Board Id가 없습니다.');
      }
      const data = await getCommunityComments(id);
      if (!data) {
        throw new Error('Data가 없습니다.');
      }
      return data;
    },
    enabled: !!id,
  });
};
