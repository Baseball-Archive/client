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
  scheme?: TeamScheme;
}

const CHEER_TEAM_STYLE =
  "inline-flex items-center rounded-lg px-1 py-0.3 text-sm font-bold text-white";

const CheerTeamBadge = ({ scheme }: { scheme?: TeamScheme }) => {
  if (!scheme) return null;
  const { name, style } = SCHEME_MAP[scheme];
  return <span className={` ${CHEER_TEAM_STYLE} ${style}`}>{name}</span>;
};

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
                className={`p-1 text-white w-8 h-8 ${homeTeam.style} text-center rounded-l-full`}
                style={{ minWidth: '3rem' }}
              >
                {homeTeam.name}
              </div>
              <div
                className={`p-1 text-white w-8 h-8 ${awayTeam.style} text-center rounded-r-full`}
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
                <div className="flex items-center justify-center w-10 h-12 relative overflow-hidden">
                  <CheerTeamBadge scheme={cheerTeam as TeamScheme} />
                </div>
                <div className="text-sm">{userName}</div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center w-16 h-10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-[#5ACAD2]" style={{ maxWidth: "24px" }}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                  </svg>

                  <span className="text-[#5ACAD2] ml-1">
                    {displayComments}
                  </span>
                </div>
                <div className="flex items-center w-16 h-10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-[#DC7B7C]" style={{ maxWidth: "24px" }}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>

                  <span className="text-[#DC7B7C] ml-1">
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