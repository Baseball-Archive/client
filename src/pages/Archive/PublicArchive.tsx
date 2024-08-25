import React, { useEffect } from 'react';
import usePublicArchive from '../../hooks/usePublicArchive';

interface PublicArchive {
  id: number;
  homeTeamName: string;
  awayTeamName: string;
  title: string;
  createdAt: string;
  nickname: string;
  myTeamName: string;
  likes: string;
  comments: string;
}

const PublicArchive = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = usePublicArchive();
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        isFetchingNextPage
      ) {
        return;
      }
      if (hasNextPage) {
        fetchNextPage();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);
  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div>
      {data?.pages.map((page, index) => (
        <div key={index}>
          {page.map((archive: PublicArchive) => (
            <div key={archive.id}>
              <div>{archive.title}</div>
              <div></div>
            </div>
          ))}
        </div>
      ))}
      {isFetching && 'Background Updating...'}
    </div>
  );
};

export default PublicArchive;
