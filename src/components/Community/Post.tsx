import Badge from "../common/Badge";

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

  return (
    <div className="mb-6 flex justify-center overflow-hidden bg-white">
      <div className="w-full max-w-lg">
        <div className="bg-gray-100">
          <div className="flex">
            <Badge scheme={home_team_name} />
            <Badge scheme={away_team_name} />
            <p>{review_short}</p>
          </div>
          <div className="flex">
            <div>{comments}</div>
            <div>{likes}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post;