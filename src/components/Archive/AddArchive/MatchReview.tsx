interface MatchReviewProps {
  review: string;
  setReview: (review: string) => void;
}

const MatchReview = ({ review, setReview }: MatchReviewProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };
  return (
    <div className="flex flex-col">
      <label className="text-base">상세 리뷰</label>
      <div className="flex h-56 items-center justify-center rounded-[4px] border">
        <textarea
          className="h-full w-full resize-none overflow-hidden bg-transparent p-4 outline-none"
          placeholder="내용을 입력하세요."
          value={review}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default MatchReview;
