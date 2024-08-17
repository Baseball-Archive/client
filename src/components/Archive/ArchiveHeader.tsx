import { Weather } from "../../types/Weather";
import ArchiveHandleButton from "../common/PostHandleButton";
import { LockClosedIcon } from "@heroicons/react/20/solid";
interface ArchiveHeaderProps {
  userId: string;
  weather: Weather;
  profileImage: string;
}

const WeatherEmojis = {
  sun: "🌞",
  rain: "☂️",
  cloud: "☁️",
  snow: "❄️",
};
const ArchiveHeader: React.FC<ArchiveHeaderProps> = ({
  userId,
  weather,
  profileImage,
}) => {
  const handleDelete = () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      alert("삭제 되었습니다.");
    }
  };
  const handleEdit = () => {
    if (window.confirm("수정 하시겠습니까?")) {
      alert("수정 되었습니다.");
    }
  };

  const isPublic = false;
  return (
    <div className="mb-5 flex items-center justify-between">
      <div className="flex">
        <img
          src={profileImage}
          className="mr-4 h-14 w-14 rounded-full bg-gray-200"
        />
        <div className="flex-col">
          <div className="flex flex-row gap-2">
            <div className="text-lg font-semibold">{userId}</div>
            <div className="flex flex-row gap-2">
              {!isPublic && (
                <>
                  · <LockClosedIcon className="size-5" />
                </>
              )}
            </div>
          </div>
          <div className="flex-row">
            <span className="text-sm text-black">한화생명이글스파크</span>
            <span> {weather && WeatherEmojis[weather]}</span>
          </div>
        </div>
      </div>
      <ArchiveHandleButton onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};
export default ArchiveHeader;
