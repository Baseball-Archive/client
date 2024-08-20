export interface CommentType {
  id: number;
  post_id: number;
  user_id: number;
  profile: number;
  nickname: string;
  content: string;
  comment_date: string;
}

interface Props {
  comment: CommentType;
}

const Comment = ({ comment }: Props) => {
  const { profile, nickname, content, comment_date } = comment;

  const getPhotoSrc = (id: number) => {
    return `https://picsum.photos/id/${id}/40/40`;
  };

  return (
    <div className="ml-6 mr-6 flex justify-center overflow-hidden bg-white pt-4">
      <div className="flex w-full max-w-lg">
        <div className="pr-2 pt-1">
          <div
            className="overflow-hidden rounded-full"
            style={{ minWidth: '32px', maxWidth: '32px' }}
          >
            <img src={getPhotoSrc(profile)} alt="Post Photo" />
          </div>
        </div>
        <div>
          <div className="text-sm font-bold">{nickname}</div>

          <div className="pb-1 pt-1 text-sm leading-none">{content}</div>
          <div className="flex flex-row items-center space-x-[4px] text-[12px] text-gray-400">
            <div className="">{comment_date}</div>
            <div className="relative top-[-1px] text-[0.5rem]">•</div>
            <button>수정</button>
            <div className="relative top-[-1px] text-[0.5rem]">•</div>
            <button>삭제</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
