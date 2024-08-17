import React from 'react';

interface MatchReviewProps {
  onSetReview: (review: string) => void;
}

const PostMatchReview: React.FC<MatchReviewProps> = ({ onSetReview }) => {
  const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onSetReview(event.target.value);
  };

  return (
    <div className="mt-2 flex flex-col">
      <label className="text-base">내용</label>
      <div className="mb-4 flex h-56 items-center justify-center rounded-[4px] border">
        <textarea
          className="h-full w-full resize-none overflow-hidden bg-transparent p-4 outline-none"
          placeholder="내용을 입력하세요."
          onChange={handleReviewChange}
        />
      </div>
    </div>
  );
};

export default PostMatchReview;
