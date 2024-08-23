import { useEffect, useState } from 'react';
import { getArchives } from '../../apis/archive';
import ArchiveHeader from './ArchiveHeader';
import ReviewSection from './ReviewSection';
import type { Archive } from '../../types/Archive';
import { Weather } from '../../types/Weather';

interface ArchiveProps {
  data: Archive;
  isCommunityArchives?: boolean;
}

const Archive = ({ data, isCommunityArchives }: ArchiveProps) => {
  const {
    nickname,
    id,
    weather,
    title,
    content,
    homeTeamScore,
    awayTeamScore,
    picUrl,
    homeTeamId,
    awayTeamId,
  } = data;

  return (
    <div className="mb-6 flex justify-center overflow-hidden bg-white">
      <div className="w-full">
        <ArchiveHeader
          id={id as number}
          nickname={nickname as string}
          weather={weather as Weather}
          profileImage={picUrl}
          matchDate={'2024-01-01'}
          stadium={'포항야구장'}
        />
        <div className="w-full flex-col items-center">
          <img
            src={picUrl}
            className="mb-4 aspect-square w-full object-cover"
          />
          <ReviewSection
            id={id as number}
            title={title}
            content={content}
            homeTeamId={homeTeamId as number}
            awayTeamId={awayTeamId as number}
            homeTeamScore={homeTeamScore}
            awayTeamScore={awayTeamScore}
            isCommunityArchives={isCommunityArchives}
          />
        </div>
      </div>
    </div>
  );
};

export default Archive;
