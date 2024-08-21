import { useState } from 'react';
import ReviewSection from './ReviewSection';
import ArchiveHeader from './ArchiveHeader';
import type { Archive } from '../../types/Archive';

interface ArchiveProps {
  data: Archive;
  isCommunityArchives?: boolean;
}

const Archive = ({ data, isCommunityArchives }: ArchiveProps) => {
  const {
    id,
    userId,
    weather,
    photo,
    matchData,
    review,
    isPublic,
    title,
    result,
  } = data;
  return (
    <div className="mb-6 flex justify-center overflow-hidden bg-white">
      <div className="w-full">
        <ArchiveHeader
          userId={userId}
          weather={weather}
          profileImage={photo}
          matchData={matchData}
        />
        <div className="w-full flex-col items-center">
          <img src={photo} className="mb-4 aspect-square w-full object-cover" />
          <ReviewSection
            matchData={matchData}
            id={id}
            title={title}
            review={review}
            result={result}
            isCommunityArchives={isCommunityArchives}
          />
        </div>
      </div>
    </div>
  );
};

export default Archive;
