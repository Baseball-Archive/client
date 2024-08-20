import { MatchData } from '../../types/MatchData';
import { Weather } from '../../types/Weather';
import ArchiveHandleButton from '../common/PostHandleButton';
import { LockClosedIcon } from '@heroicons/react/20/solid';

interface ArchiveHeaderProps {
  userId: string;
  weather: Weather;
  profileImage: string;
  matchData: MatchData;
}

const WeatherEmojis = {
  sun: '🌞',
  rain: '☂️',
  cloud: '☁️',
  snow: '❄️',
};
const ArchiveHeader: React.FC<ArchiveHeaderProps> = ({
  userId,
  weather,
  profileImage,
  matchData,
}) => {
  const handleDelete = () => {
    if (confirm('삭제 하시겠습니까?')) {
      alert('삭제 되었습니다.');
    }
  };
  const handleEdit = () => {
    if (confirm('수정 하시겠습니까?')) {
      alert('수정 되었습니다.');
    }
  };

  const isPublic = false; // 임시값 설정
  return (
    <div className="mb-5 flex justify-between">
      <div className="flex">
        <img
          src={profileImage}
          className="mr-4 h-14 w-14 rounded-full bg-gray-200"
        />
        <div className="flex-col">
          <div className="flex flex-row gap-2">
            <div className="flex items-center text-lg font-semibold">
              {userId} ·
            </div>
            <div className="flex items-center text-xs text-gray-400">
              {matchData.matchDate}
            </div>
          </div>
          <div className="flex-row">
            <span className="text-sm text-black">{matchData.stadium}</span>
            <span> {weather && WeatherEmojis[weather]}</span>
          </div>
        </div>
      </div>

      <ArchiveHandleButton onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};
export default ArchiveHeader;
