import { PostType } from "./Post";

interface Props {
  postDetail: PostType;
}

const PostDetail = ({ postDetail }: Props) => {
  
  const {
    match_date, 
    result, 
    stadium, 
    weather, 
    home_team_name, 
    away_team_name
  } = postDetail;

  return (
    <div className="bg-gray-500 m-6">
      {match_date}
      {result}
      {stadium}
      {weather}
      {home_team_name}
      {away_team_name}
    </div>
  );
}

export default PostDetail;