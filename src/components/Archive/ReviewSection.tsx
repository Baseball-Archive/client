import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MatchData } from '../../types/MatchData';
import Badge from '../common/Badge';
import { getTeamValueByKey } from '../../utils/getTeamValueByKey';
import { TeamScheme } from '../../types/TeamScheme';

interface ReviewSectionProps {
  id: number;
  homeTeamId: number;
  awayTeamId: number;
  title: string;
  content: string;
  homeTeamScore: number;
  awayTeamScore: number;
  isCommunityArchives?: boolean;
}

const ReviewSection = ({
  homeTeamId,
  awayTeamId,
  homeTeamScore,
  awayTeamScore,
  id,
  title,
  content,
  isCommunityArchives,
}: ReviewSectionProps) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCommunityMoreButton = () => {
    navigate(`/archive/${id}`);
  };
  const handlePrivateMoreButton = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="w-full">
      <div className="flex flex-row justify-between">
        <p className="flex items-center text-lg">
          <Badge
            scheme={(getTeamValueByKey(homeTeamId) as TeamScheme) || 'nc'}
          />
          <span className="mx-4 font-semibold">
            {homeTeamScore || 1} : {awayTeamScore || 2}
          </span>
          <Badge
            scheme={(getTeamValueByKey(awayTeamId) as TeamScheme) || 'nc'}
          />
        </p>
      </div>
      <div className="my-4 flex flex-col">
        <p className="font-medium">{title}</p>
      </div>
      {isExpanded ? (
        <pre className="whitespace-pre-wrap font-title text-sm">{content}</pre>
      ) : (
        <button
          className="text-gray-400"
          onClick={
            isCommunityArchives
              ? () => handleCommunityMoreButton()
              : () => handlePrivateMoreButton()
          }
        >
          ...더보기
        </button>
      )}
    </div>
  );
};
export default ReviewSection;
