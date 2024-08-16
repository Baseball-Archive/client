interface ReviewSectionProps {
  review: string;
  result: string;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({
  review,
  result,
  isExpanded,
  onToggleExpand,
}) => (
  <div className="w-full">
    <p>{result}</p>

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
