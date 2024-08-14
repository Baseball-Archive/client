import React from "react";
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

export interface Post {
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
  post: Post;
}

const Post: React.FC<Props> = ({ post }: Props) => {
  return (
    <div className="mb-6 flex justify-center overflow-hidden bg-white">
      <div className="w-full max-w-lg">
        <div className="bg-gray-100">
          <div className="flex">
            <Badge scheme={post.home_team_name} />
            <Badge scheme={post.away_team_name} />
            <p>{post.review_short}</p>
          </div>
          <div className="flex">
            <div>{post.comments}</div>
            <div>{post.likes}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post;