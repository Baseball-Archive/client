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

const teamColors: { [key in TeamScheme]: string } = {
  kia: "#440011",
  samsung: "#1D67B2",
  lg: "#C22D40",
  doosan: "#012561",
  ssg: "#65615E",
  kt: "#000000",
  nc: "#1A4484",
  hanhwa: "#EF563A",
  lotte: "#092346",
  kiwoom: "#801C26",
};

const teamNameMapping: { [key in TeamScheme]: string } = {
  kia: 'KIA',
  samsung: '삼성',
  lg: 'LG',
  doosan: '두산',
  ssg: 'SSG',
  kt: 'KT',
  nc: 'NC',
  hanhwa: '한화',
  lotte: '롯데',
  kiwoom: '키움',
};

const transformTeamName = (teamName: TeamScheme): string => {
  return teamName.length >= 4 ? teamNameMapping[teamName] : teamName.toUpperCase();
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

  const homeTeamName = transformTeamName(home_team_name);
  const awayTeamName = transformTeamName(away_team_name);

  const homeTeamColor = teamColors[home_team_name];
  const awayTeamColor = teamColors[away_team_name];

  return (
<div className="ml-6 mr-6 mb-0 flex justify-center overflow-hidden bg-white">
  <div className="w-full max-w-lg">
    <div className="pt-3 pb-3 border-t-2 border-gray-300">
      <div className="flex items-center">
        <div 
          className="p-2 text-white w-14 h-10"
          style={{ 
            backgroundColor: homeTeamColor,
            borderRadius: '9999px 0 0 9999px',
            paddingLeft: '1rem',
            minWidth: '3.5rem',
          }}
        >
          {homeTeamName}
        </div>
        <div 
          className="p-2 text-white  w-14 h-10"
          style={{ 
            backgroundColor: awayTeamColor,
            borderRadius: '0 9999px 9999px 0',
            paddingRight: '1rem',
            minWidth: '3.5rem',
          }}
        >
          {awayTeamName}
        </div>
        <div 
            className="pl-6 font-bold overflow-hidden w-80" 
            style={{ 
            display: '-webkit-box', 
            WebkitBoxOrient: 'vertical', 
            WebkitLineClamp: 1, 
            textOverflow: 'ellipsis'
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