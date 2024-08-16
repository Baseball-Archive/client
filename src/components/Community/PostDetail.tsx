import { Link } from "react-router-dom";
import { PostType } from "./Post";
import { transformTeamName } from "./Post";
import { dummyUser } from "../../pages/Community/dummyPostUser";
import { TeamScheme } from "./Post";
import Badge from "../common/Badge";

interface Props {
  postDetail: PostType;
}

const PostDetail = ({ postDetail }: Props) => {
  
  const {
    id,
    user_id,
    review_short,
    match_date, 
    result, 
    stadium, 
    weather, 
    home_team_name, 
    away_team_name,
    review_long,
  } = postDetail;

  const homeTeam = transformTeamName(home_team_name);
  const awayTeam = transformTeamName(away_team_name);

  const user = dummyUser.find(user => user.id === user_id);
  const cheerTeam = user ? user.cheer_team : undefined;
  const userName = user ? user.user_name : "Unknown";

  return (
    <div className="ml-6 mr-6 flex justify-center overflow-hidden bg-white">
      <div className="w-full max-w-lg">
        <div className="pt-3 border-b-2 border-gray-300">
          <div className="flex items-center">
            <div className="pl-2 font-bold">
              {review_short}
            </div>
            <div className="ml-auto text-right">
              <div className="text-sm text-gray-400 font-thin">
                {match_date}
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center font-normal text-gray-500">
              <div className="flex items-center justify-center w-12 h-12 relative overflow-hidden">
                <Badge scheme={cheerTeam as TeamScheme} />
              </div>
              <div className="ml-1 text-sm">{userName}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;