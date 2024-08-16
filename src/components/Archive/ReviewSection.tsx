interface ReviewSectionProps {
  review: string;
  result: { homeTeam: number; awayTeam: number };
  isExpanded: boolean;
  scheduleId: string;
  onToggleExpand: () => void;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({
  review,
  result,
  isExpanded,
  scheduleId,
  onToggleExpand,
}) => (
  <div className="w-full">
    <div className="flex flex-row justify-between">
      <p className="text-lg">
        {result.homeTeam}:{result.awayTeam}
      </p>
      <p className="text-sm text-gray-400">{scheduleId}</p>
    </div>

    <p
      className={`text-gray-500 ${isExpanded ? "line-clamp-none" : "line-clamp-1"}`}
    >
      {review}
    </p>
    <button onClick={onToggleExpand} className="mt-5 text-sm text-gray-500">
      {isExpanded ? "" : "더 보기"}
    </button>
  </div>
);
export default ReviewSection;
