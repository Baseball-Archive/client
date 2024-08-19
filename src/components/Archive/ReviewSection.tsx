import { useNavigate, useParams } from 'react-router-dom';
import { MatchData } from '../../types/MatchData';
import Badge from '../common/Badge';

interface ReviewSectionProps {
  id: number;
  matchData: MatchData;
  title: string;
  review: string;
  result: { homeTeam: number; awayTeam: number };
}

const ReviewSection = ({
  matchData,
  review,
  result,
  id,
  title,
}: ReviewSectionProps) => {
  const { id: isDetail } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const handleMoreClick = () => {
    navigate(`/archive/${id}`);
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
      <div className="mt-4 flex flex-col">
        <p className="">{title}</p>
      </div>
      <div>
        {!isDetail && (
          <>
            <p className="mt-4 truncate">{review}</p>
            <button className="text-gray-400" onClick={handleMoreClick}>
              ...더보기
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default ReviewSection;
