import { PostType } from "./Post";
import { transformTeamName } from "./Post";
import { dummyUser } from "../../pages/Community/dummyPostUser";
import { TeamScheme } from "./Post";
import Badge from "../common/Badge";
import PostHandleButton from "../common/PostHandleButton";

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
        <div className="mt-6 mb-16">
          <div>
            <div className="pb-4">
              <img src={getPhotoSrc(photo)} alt="Post Photo" />
            </div>
            <p>{review_long}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;