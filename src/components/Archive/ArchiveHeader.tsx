import ArchiveHandleButton from './ArchiveHandleButton';

type WeatherType = '맑음' | '비' | '흐림';
interface ArchiveHeaderProps {
  user_id: string;
  schedule_id: string;
  weather: WeatherType;
  weatherEmojis: Record<WeatherType, string>;
  profileImage: string;
}

const ArchiveHeader: React.FC<ArchiveHeaderProps> = ({
  user_id,
  schedule_id,
  weather,
  weatherEmojis,
  profileImage,
}) => (
  <div className="mb-5 flex items-center justify-between">
    <div className="flex">
      <img
        src={profileImage}
        className="mr-4 h-14 w-14 rounded-full bg-gray-200"
      />
      <div className="flex-col">
        <div className="flex-row">
          <span className="text-lg font-semibold">{user_id}</span>
          <span className="text-sm text-gray-500"> · {schedule_id}</span>
        </div>
        <div className="flex-row">
          <span className="text-sm text-black">한밭종합운동장</span>
          <span> {weatherEmojis[weather]}</span>
        </div>
      </div>
    </div>
    <ArchiveHandleButton />
  </div>
);
export default ArchiveHeader;
