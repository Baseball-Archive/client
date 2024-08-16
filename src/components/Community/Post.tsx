import Badge from "../common/Badge";
import { dummyUser } from "../../pages/Community/dummyPostUser";
import { Link } from "react-router-dom";

export type TeamScheme =
  | "kia"
  | "samsung"
  | "lg"
  | "doosan"
  | "ssg"
  | "kt"
  | "nc"
  | "hanhwa"
  | "lotte"
  | "kiwoom";

export const SCHEME_MAP: Record<TeamScheme, { name: string; style: string }> = {
  kia: { name: "기아", style: "bg-team-kia" },
  samsung: { name: "삼성", style: "bg-team-samsung" },
  lg: { name: "LG", style: "bg-team-lg" },
  doosan: { name: "두산", style: "bg-team-doosan" },
  ssg: { name: "SSG", style: "bg-team-ssg" },
  kt: { name: "KT", style: "bg-team-kt" },
  nc: { name: "NC", style: "bg-team-nc" },
  hanhwa: { name: "한화", style: "bg-team-hanhwa" },
  lotte: { name: "롯데", style: "bg-team-lotte" },
  kiwoom: { name: "키움", style: "bg-team-kiwoom" },
};

export const transformTeamName = (teamName: TeamScheme): { name: string; style: string } => {
  return SCHEME_MAP[teamName];
};

export interface PostType {
  id: number;
  match_date: string;
  home_team_name: TeamScheme;
  away_team_name: TeamScheme;
  review_short: string;
  review_long: string;
  user_id: number;
  likes: number;
  comments: number;
  stadium: string;
  weather: string;
  result: TeamScheme;
  photo: number;
}

interface Props {
  post: PostType;
}

const Post = ({ post }: Props) => {
  const {
    id,
    match_date,
    home_team_name,
    away_team_name,
    review_short,
    user_id,
    comments,
    likes,
  } = post;

  const homeTeam = transformTeamName(home_team_name);
  const awayTeam = transformTeamName(away_team_name);

  const user = dummyUser.find(user => user.id === user_id);
  const cheerTeam = user ? user.cheer_team : undefined;
  const userName = user ? user.user_name : "Unknown";

  const displayComments = comments >= 100 ? "99+" : comments;
  const displayLikes = likes >= 100 ? "99+" : likes;

  return (
    <div className="ml-6 mr-6 flex justify-center overflow-hidden bg-white">
      <div className="w-full max-w-lg">
        <Link to={`/posts/${id}`}>
          <div className="pt-3 border-t-2 border-gray-300">
            <div className="flex items-center">
              <div
                className={`p-2 text-white w-14 h-10 ${homeTeam.style} text-center rounded-l-full`}
                style={{ minWidth: '3.5rem' }}
              >
                {homeTeam.name}
              </div>
              <div
                className={`p-2 text-white w-14 h-10 ${awayTeam.style} text-center rounded-r-full`}
                style={{ minWidth: '3.5rem' }}
              >
                {awayTeam.name}
              </div>
              <div className="pl-6 font-bold w-64 overflow-hidden text-ellipsis whitespace-nowrap">
                {review_short}
              </div>
              <div className="ml-auto">
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
              <div className="flex items-center space-x-2">
                <div className="flex items-center w-16 h-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" fill="none">
                    <path fill="#5ACAD2" d="m5.062 17.51.67.336a.75.75 0 0 0-.256-.962l-.414.625Zm-1.373 2.736-.67-.337.67.337Zm.661.7.335.672-.335-.671Zm3.943-1.962.209-.72a.75.75 0 0 0-.543.05l.334.67Zm14.957-8.706c0 4.59-4.128 8.529-10.75 8.529v1.5c7.185 0 12.25-4.369 12.25-10.029h-1.5ZM12.5 1.75c6.622 0 10.75 3.94 10.75 8.528h1.5C24.75 4.618 19.685.25 12.5.25v1.5ZM1.75 10.278C1.75 5.69 5.878 1.75 12.5 1.75V.25C5.315.25.25 4.619.25 10.278h1.5Zm3.726 6.606C3.099 15.31 1.75 12.926 1.75 10.278H.25c0 3.199 1.642 6.03 4.397 7.856l.829-1.25Zm-1.117 3.698 1.373-2.736-1.34-.673-1.373 2.736 1.34.673Zm-.343-.307a.273.273 0 0 1 .304.052.233.233 0 0 1 .04.255l-1.341-.673a1.268 1.268 0 0 0 .21 1.448 1.23 1.23 0 0 0 1.456.261l-.669-1.343Zm3.943-1.962-3.943 1.962.669 1.343 3.942-1.962-.668-1.343Zm4.541.494c-1.457 0-2.796-.194-3.998-.543l-.419 1.44c1.346.392 2.828.603 4.417.603v-1.5Z"/>
                  </svg>
                  <span className="text-[#5ACAD2] ml-2">
                    {displayComments}
                  </span>
                </div>
                <div className="flex items-center w-16 h-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" fill="none">
                    <path stroke="#DC7B7C" strokeLinejoin="round" strokeWidth="1.5" d="M1.01 8.324c-.213-5.372 2.815-7.06 5.138-7.305C8.472.774 10.644 2.952 11.5 5.53c.856-2.579 3.012-4.67 5.352-4.512 2.339.157 5.351 1.933 5.137 7.305-.208 5.226-3.861 8.621-9.974 12.363a.988.988 0 0 1-1.03 0C4.872 16.945 1.219 13.55 1.01 8.324Z"/>
                  </svg>
                  <span className="text-[#DC7B7C] ml-2">
                    {displayLikes}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Post;
