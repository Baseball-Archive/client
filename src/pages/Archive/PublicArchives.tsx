import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PublicPost from '../../components/common/PublicPost';
import usePublicArchive from '../../hooks/usePublicArchive';
import Community from '../Community/Community';

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

const PublicArchives = () => {
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
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 2 &&
        !isFetchingNextPage &&
        hasNextPage
      ) {
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
      <Community />
      {data?.pages.map((page, index) => (
        <div key={index}>
          {page?.map((archive: PublicArchive) => (
            <Link to={`/archive/${archive.id}`}>
              <PublicPost key={archive.id} post={archive} />
            </Link>
          ))}
        </div>
      ))}
      {isFetching && 'Background Updating...'}
    </div>
  );
};

export default PublicArchives;
