import { PostType } from "./Post";
import { transformTeamName } from "./Post";
import { dummyUser } from "../../pages/Community/dummyPostUser";
import { TeamScheme } from "./Post";
import Badge from "../common/Badge";
import PostHandleButton from "../common/PostHandleButton";
import { useState } from "react";

interface Props {
  postDetail: PostType;
}

const PostDetail = ({ postDetail }: Props) => {

  const {
    user_id,
    review_short,
    match_date, 
    result, 
    stadium, 
    weather, 
    home_team_name, 
    away_team_name,
    review_long,
    photo,
  } = postDetail;

  const [isLikesClicked, setIsLikesClicked] = useState(() => {
    const savedState = localStorage.getItem(`isLikesClicked-${postDetail.id}`);
    return savedState ? JSON.parse(savedState) : false;
  });

  const toggleLikes = () => {
    const newState = !isLikesClicked;
    setIsLikesClicked(newState);
    localStorage.setItem(`isLikesClicked-${postDetail.id}`, JSON.stringify(newState));
  }

  const handleDelete = () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      alert("삭제 되었습니다.");
    }
  };
  const handleEdit = () => {
    if (window.confirm("수정 하시겠습니까?")) {
      alert("수정 되었습니다.");
    }
  };

  const homeTeam = transformTeamName(home_team_name);
  const awayTeam = transformTeamName(away_team_name);
  const winTeam = transformTeamName(result);

  const user = dummyUser.find(user => user.id === user_id);
  const cheerTeam = user ? user.cheer_team : undefined;
  const userName = user ? user.user_name : "Unknown";

  const getPhotoSrc = (id: number) => {
    return `https://picsum.photos/id/${id}/600/600`;
  };

  return (
    <div className="ml-6 mr-6 flex justify-center overflow-hidden bg-white">
      <div className="w-full max-w-lg">
        <div className="pt-6 border-b-2 border-gray-300">
          <div className="flex items-start">
            <div className="pl-2 pr-2 font-bold">
              {review_short}
            </div>
            <div className="ml-auto">
              <PostHandleButton onEdit={handleEdit} onDelete={handleDelete} />
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center font-normal text-gray-500">
              <div className="flex items-center justify-center w-12 h-12 relative overflow-hidden">
                <Badge scheme={cheerTeam as TeamScheme} />
              </div>
              <div className="ml-1 text-sm">{userName}</div>
            </div>
            <div className="text-sm text-gray-400 font-thin">
                {match_date}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1 mt-2 pb-3 border-b border-gray-300 text-sm">
          <div className="flex items-start">
            <p className="text-gray-500 font-thin min-w-[4rem]">경기 날짜</p>
            <p className="font-bold min-w-[4rem]">{match_date}</p>
          </div>
          <div className="flex items-center">
            <p className="text-gray-500 font-thin min-w-[4rem]">승리 팀</p>
            <p className="font-bold min-w-[4rem]">{winTeam.name}</p>
          </div>
          <div className="flex items-center">
            <p className="text-gray-500 font-thin min-w-[4rem]">경기장</p>
            <p className="font-bold min-w-[4rem]">{stadium}</p>
          </div>
          <div className="flex items-center">
            <p className="text-gray-500 font-thin min-w-[4rem]">날씨</p>
            <p className="font-bold min-w-[4rem]">{weather}</p>
          </div>
          <div className="flex items-center">
            <p className="text-gray-500 font-thin min-w-[4rem]">홈</p>
            <p className="font-bold min-w-[4rem]">{homeTeam.name}</p>
          </div>
          <div className="flex items-center">
            <p className="text-gray-500 font-thin min-w-[4rem]">어웨이</p>
            <p className="font-bold min-w-[4rem]">{awayTeam.name}</p>
          </div>
        </div>
        <div className="pt-6 pb-2">
          <div>
            <div className="pb-4">
              <img src={getPhotoSrc(photo)} alt="Post Photo" />
            </div>
            <p>{review_long}</p>
          </div>
        </div>
        <div className="pb-4 border-b border-gray-300 flex justify-end">
          <button onClick={toggleLikes}>
            <div className="border-[1px] w-[56px] h-[56px] rounded-full shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill={isLikesClicked ? "currentColor" : "none"} viewBox="-6 -6 32 32" stroke-width="1" stroke="currentColor" className="text-[#DC7B7C]" style={{ maxWidth: "48px" }}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </div>
          </button>
        </div>
        <div className="h-32"></div>
      </div>
    </div>
  );
}

export default PostDetail;
