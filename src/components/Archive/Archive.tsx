import { DEFAULT_IMAGE } from '../../constants/image';
import { Weather } from '../../types/Weather';
import { convertStadiumName } from '../../utils/convertStadiumName';
import ArchiveHeader from './ArchiveHeader';
import ReviewSection from './ReviewSection';
import type { Archive } from '../../types/Archive';

interface ArchiveProps {
  data: Archive;
  isCommunityArchives?: boolean;
}

const Archive = ({ data, isCommunityArchives }: ArchiveProps) => {
  if (!data) {
    return <div>데이터가 없습니다.</div>;
  }

  const {
    nickname,
    id,
    stadium,
    weather,
    title,
    content,
    homeTeamScore,
    awayTeamScore,
    picUrl,
    homeTeamId,
    awayTeamId,
    matchDate,
    userPicUrl,
  } = data;

  return (
    <div className="mb-6 flex flex-col justify-center overflow-hidden bg-white">
      <div className="w-full">
        <ArchiveHeader
          id={id as number}
          nickname={(nickname as string) || 'test'}
          weather={weather as Weather}
          profileImage={(userPicUrl as string) || DEFAULT_IMAGE}
          matchDate={matchDate as string}
          stadium={convertStadiumName(stadium as string) || (stadium as string)}
          isCommunityArchives={isCommunityArchives}
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
