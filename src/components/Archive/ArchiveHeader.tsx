import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { deleteArchive } from '../../apis/archive';
import { Weather } from '../../types/Weather';
import ArchiveHandleButton from '../common/PostHandleButton';
import { showToast } from '../common/Toast';

interface ArchiveHeaderProps {
  id: number;
  nickname: string;
  weather: Weather;
  matchDate: string;
  stadium: string;
  profileImage: string;
  isCommunityArchives?: boolean;
}

const WeatherEmojis = {
  sun: '🌞',
  rain: '☂️',
  cloud: '☁️',
  snow: '❄️',
};
const ArchiveHeader = ({
  id,
  nickname,
  weather,
  profileImage,
  matchDate,
  stadium,
  isCommunityArchives,
}: ArchiveHeaderProps) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: deleteArchiveMutate } = useMutation({
    mutationFn: deleteArchive,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['Archives'] });
      showToast('삭제 되었습니다.', 'error');
    },
    onError: () => {
      showToast('삭제에 실패했습니다.', 'error');
    },
  });

  const handleDelete = () => {
    if (confirm('삭제 하시겠습니까?')) {
      deleteArchiveMutate(id);
    }
  };
  const handleEdit = () => {
    if (confirm('수정 하시겠습니까?')) {
      navigate(`/editarchive/${id}`);
    }
  };

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
              {nickname || 'test'} ·
            </div>
            <div className="flex items-center text-xs text-gray-400">
              {matchDate.slice(0, 10) || '2021-01-01'}
            </div>
          </div>
          <div className="flex-row">
            <span className="text-sm text-black">
              {stadium || '포항야구장'}
            </span>
            <span> {weather && WeatherEmojis[weather]}</span>
          </div>
        </div>
      </div>
      {isCommunityArchives ? (
        <></>
      ) : (
        <ArchiveHandleButton onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </div>
  );
};
export default ArchiveHeader;
