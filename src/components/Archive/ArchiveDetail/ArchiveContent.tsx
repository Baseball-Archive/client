import { TeamScheme } from '../../../types/TeamScheme';
import { getTeamLabelByKey } from '../../../utils/getTeamValueByKey';
import Badge from '../../common/Badge';
import PostHandleButton from '../../common/PostHandleButton';
import type { Archive } from '../../../types/Archive';

interface ArchiveContentProps {
  ArchiveContent: Archive;
}
//TOFIX : api확정되면 타입수정
const ArchiveContent = ({ ArchiveContent }: ArchiveContentProps) => {
  // const {
  //   nickname,
  //   id,
  //   weather,
  //   title,
  //   content,
  //   homeTeamScore,
  //   awayTeamScore,
  //   picUrl,
  //   homeTeamId,
  //   awayTeamId,
  //   matchDate,
  //   updatedAt,
  //   stadium,
  // } = ArchiveContent;

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
            <div className="pl-2 text-lg font-semibold">
              {ArchiveContent.title}
            </div>
            <PostHandleButton onEdit={handleEdit} onDelete={handleDelete} />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center font-normal">
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden">
                <Badge scheme={'hanhwa'} />
              </div>
              <div className="ml-1 text-sm">{'TEST'}</div>
            </div>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-1 border-b border-gray-300 pb-3 text-sm">
          <div className="flex items-start">
            <p className="min-w-[4rem] text-xs font-light">경기 날짜</p>
            <p className="min-w-[4rem] text-xs font-medium">
              {ArchiveContent.matchDate}
            </p>
          </div>
          <div className="flex items-center">
            <p className="min-w-[4rem] text-xs font-light text-black">
              경기 결과
            </p>
            <p className="min-w-[4rem] text-xs font-medium">
              {ArchiveContent.homeTeamScore}:{ArchiveContent.awayTeamScore}
            </p>
          </div>
          <div className="flex items-center">
            <p className="min-w-[4rem] text-xs font-light text-black">경기장</p>
            <p className="min-w-[4rem] text-xs font-medium">
              {ArchiveContent.stadium}
            </p>
          </div>
          <div className="flex items-center">
            <p className="min-w-[4rem] text-xs font-light text-black">날씨</p>
            <p className="min-w-[4rem] text-xs font-medium">
              {ArchiveContent.weather}
            </p>
          </div>
          <div className="flex items-center">
            <p className="min-w-[4rem] text-xs font-light text-black">홈</p>
            <p className="min-w-[4rem] text-xs font-medium">
              {getTeamLabelByKey(ArchiveContent.homeTeamId as number)}
            </p>
          </div>
          <div className="flex items-center">
            <p className="min-w-[4rem] text-xs font-light text-black">어웨이</p>
            <p className="min-w-[4rem] text-xs font-medium text-black">
              {getTeamLabelByKey(ArchiveContent.awayTeamId as number)}
            </p>
          </div>
        </div>
        <div className="pb-2 pt-6">
          <div>
            <pre className="whitespace-pre-wrap font-title text-xs">
              {ArchiveContent.content}
            </pre>
            <div className="pb-4">
              <img
                className="w-full"
                src={ArchiveContent.picUrl}
                alt="Post Photo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchiveContent;
