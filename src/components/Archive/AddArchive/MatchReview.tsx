const MatchReview = () => {
  return (
    <div className="mt-2 flex flex-col">
      <label className="text-base">내용</label>
      <div className="mb-4 flex h-56 items-center justify-center rounded-[4px] border">
        <textarea
          className="h-full w-full resize-none overflow-hidden bg-transparent p-4 outline-none"
          placeholder="내용을 입력하세요."
        />
      </div>
    </div>
  );
};

export default MatchReview;
