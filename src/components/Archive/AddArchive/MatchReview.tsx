interface MatchReviewProps {
  content: string;
  onChangeReview: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MatchReview = ({ content, onChangeReview }: MatchReviewProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="review" className="">
        상세 리뷰
      </label>
      <div className="flex h-56 items-center justify-center rounded-[4px] border">
        <textarea
          id="review"
          className="h-full w-full resize-none overflow-hidden bg-transparent p-4 outline-none"
          placeholder="내용을 입력하세요."
          value={content}
          onChange={onChangeReview}
        />
      </div>
    </div>
  );
};

export default MatchReview;
