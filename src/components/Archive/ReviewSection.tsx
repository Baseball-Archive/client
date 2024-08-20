import { useNavigate, useParams } from 'react-router-dom';
import { MatchData } from '../../types/MatchData';
import Badge from '../common/Badge';
import { useState } from 'react';

interface ReviewSectionProps {
  id: number;
  matchData: MatchData;
  title: string;
  review: string;
  result: { homeTeam: number; awayTeam: number };
  isCommunityArchives?: boolean;
}

const ReviewSection = ({
  matchData,
  review,
  result,
  id,
  title,
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
          <Badge scheme={matchData.homeTeam} />
          <span className="mx-4 font-semibold">
            {result.homeTeam} : {result.awayTeam}
          </span>
          <Badge scheme={matchData.awayTeam} />
        </p>
      </div>
      <div className="my-4 flex flex-col">
        <p className="font-medium">{title}</p>
      </div>
      {isExpanded ? (
        <pre className="whitespace-pre-wrap font-title text-sm">{review}</pre>
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
