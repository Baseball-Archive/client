aimport { useInfiniteQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchPublicArchives } from '../apis/archive';

export const usePublicArchive = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['PublicArchives'],
    queryFn: fetchPublicArchives,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      const lastPageLength = lastPage.length;
      return lastPageLength === 6 ? pages.length + 1 : undefined;
    },
  });

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  };
};

export default usePublicArchive;
