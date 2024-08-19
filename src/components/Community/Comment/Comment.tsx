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

  const { 
    profile, 
    nickname,
    content, 
    comment_date,
  } = comment;

  const getPhotoSrc = (id: number) => {
    return `https://picsum.photos/id/${id}/40/40`;
  };

  return (
    <div className="ml-6 mr-6 pt-4 flex justify-center overflow-hidden bg-white">
      <div className="w-full max-w-lg flex">
        <div className="pr-2 pt-1">
          <div className="rounded-full overflow-hidden" style={{ minWidth: "32px", maxWidth: "32px"}}>
            <img src={getPhotoSrc(profile)} alt="Post Photo" />
          </div>
        </div>
        <div>
          <div className="text-sm font-bold">{nickname}</div>
          <div className="pt-1 pb-1 leading-none text-sm">{content}</div>
          <div className="flex flex-row text-[12px] text-gray-400 items-center space-x-[4px]">
            <div className="">{comment_date}</div>
            <div className="relative top-[-1px] text-[0.5rem]">•</div>
            <button>수정</button>
            <div className="relative top-[-1px] text-[0.5rem]">•</div>
            <button>삭제</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment;