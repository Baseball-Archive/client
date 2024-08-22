import type { Archive } from '../../../types/Archive';
import { TeamScheme } from '../../../types/TeamScheme';
import { getTeamLabelByKey } from '../../../utils/getTeamValueByKey';
import Badge from '../../common/Badge';
import PostHandleButton from '../../common/PostHandleButton';

interface ArchiveContentProps {
  ArchiveContent: Archive;
}

const ArchiveContent = ({ ArchiveContent }: ArchiveContentProps) => {
  const {
    id,
    userId,
    weather,
    matchData,
    result,
    title,
    review,
    photo,
    isPublic,
    myTeam,
  } = ArchiveContent;

  const handleDelete = () => {
    if (window.confirm('삭제 하시겠습니까?')) {
      alert('삭제 되었습니다.');
    }
  };
  const handleEdit = () => {
    if (window.confirm('수정 하시겠습니까?')) {
      alert('수정 되었습니다.');
    }
  };

  return (
    <div className="flex justify-center overflow-hidden bg-white">
      <div className="w-full">
        <div className="border-b-[1px] border-black">
          <div className="flex items-center justify-between">
            <div className="pl-2 text-lg font-semibold">{title}</div>
            <PostHandleButton onEdit={handleEdit} onDelete={handleDelete} />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center font-normal">
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden">
                <Badge scheme={myTeam as TeamScheme} />
              </div>
              <div className="ml-1 text-sm">{userId}</div>
            </div>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-1 border-b border-gray-300 pb-3 text-sm">
          <div className="flex items-start">
            <p className="min-w-[4rem] text-xs font-light">경기 날짜</p>
            <p className="min-w-[4rem] text-xs font-medium">
              {matchData.matchDate}
            </p>
          </div>
          <div className="flex items-center">
            <p className="min-w-[4rem] text-xs font-light text-black">
              경기 결과
            </p>
            <p className="min-w-[4rem] text-xs font-medium">
              {result.homeTeam}:{result.awayTeam}
            </p>
          </div>
          <div className="flex items-center">
            <p className="min-w-[4rem] text-xs font-light text-black">경기장</p>
            <p className="min-w-[4rem] text-xs font-medium">
              {matchData.stadium}
            </p>
          </div>
          <div className="flex items-center">
            <p className="min-w-[4rem] text-xs font-light text-black">날씨</p>
            <p className="min-w-[4rem] text-xs font-medium">{weather}</p>
          </div>
          <div className="flex items-center">
            <p className="min-w-[4rem] text-xs font-light text-black">홈</p>
            <p className="min-w-[4rem] text-xs font-medium">
              {getTeamLabelByKey(matchData.homeTeamId)}
            </p>
          </div>
          <div className="flex items-center">
            <p className="min-w-[4rem] text-xs font-light text-black">어웨이</p>
            <p className="min-w-[4rem] text-xs font-medium text-black">
              {getTeamLabelByKey(matchData.awayTeamId)}
            </p>
          </div>
        </div>
        <div className="pb-2 pt-6">
          <div>
            <pre className="whitespace-pre-wrap font-title text-xs">
              {review}
            </pre>
            <div className="pb-4">
              <img src={photo} alt="Post Photo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchiveContent;
