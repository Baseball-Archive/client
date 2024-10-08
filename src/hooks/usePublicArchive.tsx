import { useInfiniteQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchPublicArchives } from '../apis/archive';

const LIMIT_POST = 10;

export const usePublicArchive = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    refetch,
  } = useInfiniteQuery({
    queryKey: ['PublicArchives'],
    queryFn: fetchPublicArchives,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage) {
        return undefined;
      }
      const lastPageLength = lastPage.length;
      return lastPageLength === LIMIT_POST ? pages.length + 1 : undefined;
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
    refetch,
  };
};

export default usePublicArchive;
