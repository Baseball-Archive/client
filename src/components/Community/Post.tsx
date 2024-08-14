type TeamScheme =
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

const SCHEME_MAP: Record<TeamScheme, { name: string; style: string }> = {
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

const transformTeamName = (teamName: TeamScheme): { name: string; style: string } => {
  return SCHEME_MAP[teamName];
};

export interface PostType {
  id: number;
  match_date: string;
  home_team_name: TeamScheme;
  away_team_name: TeamScheme;
  review_short: string;
  user_id: number;
  likes: number;
  comments: number;
}

interface Props {
  post: PostType;
}

const Post = ({ post }: Props) => {
  const {
    home_team_name,
    away_team_name,
    review_short,
    comments,
    likes
  } = post;

  const homeTeam = transformTeamName(home_team_name);
  const awayTeam = transformTeamName(away_team_name);

  return (
    <div className="ml-6 mr-6 mb-0 flex justify-center overflow-hidden bg-white">
      <div className="w-full max-w-lg">
        <div className="pt-3 pb-3 border-t-2 border-gray-300">
          <div className="flex items-center">
            <div
              className={`p-2 text-white w-14 h-10 ${homeTeam.style}`}
              style={{
                borderRadius: '9999px 0 0 9999px',
                paddingLeft: '1rem',
                minWidth: '3.5rem',
              }}
            >
              {homeTeam.name}
            </div>
            <div
              className={`p-2 text-white w-14 h-10 ${awayTeam.style}`}
              style={{
                borderRadius: '0 9999px 9999px 0',
                paddingRight: '1rem',
                minWidth: '3.5rem',
              }}
            >
              {awayTeam.name}
            </div>
            <div
              className="pl-6 font-bold overflow-hidden w-80"
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 1,
                textOverflow: 'ellipsis',
              }}
            >
              {review_short}
            </div>
          </div>
          <div className="flex">
            <div>{comments}</div>
            <div>{likes}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
