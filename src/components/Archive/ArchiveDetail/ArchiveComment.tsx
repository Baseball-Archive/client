import { Comment } from '../../../types/Comment';

interface Props {
  comment: Comment;
}

const ArchiveComment = ({ comment }: Props) => {
  const { userId, commentId, content, updatedAt, nickname, picUrl } = comment;

  return (
    <div className="flex justify-center overflow-hidden bg-white pt-4">
      <div className="flex w-full">
        <div className="pr-2 pt-1">
          <div
            className="overflow-hidden rounded-full"
            style={{ minWidth: '32px', maxWidth: '32px' }}
          >
            <img src={picUrl} alt="commentUser" />
          </div>
        </div>
        <div>
          <div className="text-sm font-bold">{nickname}</div>

          <div className="pb-1 pt-1 text-sm leading-none">{content}</div>
          <div className="flex flex-row items-center space-x-[4px] text-[12px] text-gray-400">
            <div className="">{updatedAt}</div>
            <div className="relative top-[-1px] text-[0.5rem]">•</div>
            <button type="button">수정</button>
            <div className="relative top-[-1px] text-[0.5rem]">•</div>
            <button type="button">삭제</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchiveComment;
