import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getArchiveComments } from '../apis/comment';
import { Comment } from '../types/Comment';

const useArchiveComment = (id: string) => {
  const { data: archiveComment } = useQuery<Comment[]>({
    queryKey: ['ArchiveCommnet'],
    queryFn: () => getArchiveComments(id),
  });
  return { archiveComment };
};

export default useArchiveComment;
