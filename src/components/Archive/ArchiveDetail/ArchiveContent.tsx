import { useEffect } from 'react';
import { DEFAULT_IMAGE } from '../../../constants/image';
import { TeamScheme } from '../../../types/TeamScheme';
import { Weather } from '../../../types/Weather';
import { convertTeamNameToEnglish } from '../../../utils/convertTeamNameToEnglish';
import formatTimeDifference from '../../../utils/formatTimeDifference';
import { getTeamLabelByKey } from '../../../utils/getTeamValueByKey';
import { useRenderEmoji } from '../../../utils/renderWeatherEmoji';
import Badge from '../../common/Badge';
import PostHandleButton from '../../common/PostHandleButton';
import type { ArchiveContent } from '../../../types/Archive';

interface ArchiveContentProps {
  ArchiveContent: ArchiveContent;
  onError: () => void;
}
//TOFIX : api확정되면 타입수정
const ArchiveContent = ({ ArchiveContent, onError }: ArchiveContentProps) => {
  const {
    id,
    matchDate,
    homeTeamName,
    awayTeamName,
    stadium,
    weather,
    homeTeamScore,
    awayTeamScore,
    content,
    title,
    picUrl,
    createdAt,
    nickname,
    myTeamName,
    likes,
    comments,
  } = ArchiveContent;

  useEffect(() => {
    if (!ArchiveContent) {
      onError();
    }
  }, [ArchiveContent, onError]);

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
            <div className="pl-2 text-2xl font-semibold">{title}</div>
            <div className="flex items-center text-sm text-gray-400">
              {formatTimeDifference(createdAt)}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center font-normal">
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden">
                <Badge
                  scheme={convertTeamNameToEnglish(myTeamName) as TeamScheme}
                />
              </div>
              <div className="ml-1 text-sm">{nickname}</div>
            </div>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-1 border-b border-gray-300 pb-3 text-sm">
          <div className="flex items-start">
            <p className="text-s min-w-[4rem] font-light">경기 날짜</p>
            <p className="text-s min-w-[4rem] font-medium">
              {matchDate ? matchDate.slice(0, 10) : '날짜 없음'}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-s min-w-[4rem] font-light text-black">
              경기 결과
            </p>
            <p className="text-s min-w-[4rem] font-medium">
              {homeTeamScore} : {awayTeamScore}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-s min-w-[4rem] font-light text-black">경기장</p>
            <p className="text-s min-w-[4rem] font-medium">{stadium}</p>
          </div>
          <div className="flex items-center">
            <p className="text-s min-w-[4rem] font-light text-black">날씨</p>
            <p className="text-s min-w-[4rem] font-medium">
              {useRenderEmoji(weather as Weather)}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-s min-w-[4rem] font-light text-black">홈</p>
            <p className="text-s min-w-[4rem] font-medium">{homeTeamName}</p>
          </div>
          <div className="flex items-center">
            <p className="text-s min-w-[4rem] font-light text-black">어웨이</p>
            <p className="text-s min-w-[4rem] font-medium text-black">
              {awayTeamName}
            </p>
          </div>
        </div>
        <div className="pt-6">
          <div>
            <pre className="text-s whitespace-pre-wrap font-title">
              {content}
            </pre>
            <div className="pt-5">
              {picUrl && (
                <img className="w-full" src={picUrl} alt="Archive Photo" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchiveContent;
