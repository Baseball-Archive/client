import Post, { PostType, TeamScheme } from "../../components/Community/Post";

const dummyPost: PostType[] = [
  {
    id: 1,
    match_date: "2024.01.01",
    home_team_name: "kia",
    away_team_name: "samsung",
    review_short: "재미있었다",
    user_id: 1,
    likes: 1,
    comments: 0,
  },
  {
    id: 2,
    match_date: "2024.01.02",
    home_team_name: "lg",
    away_team_name: "doosan",
    review_short: "즐거웠다",
    user_id: 2,
    likes: 2,
    comments: 0,
  },
]

const Posts = () => {
  return (
    <div>
      <div>
        커뮤니티
      </div>
      {
        dummyPost.map((item) => (
          <Post 
            key={item.id}
            post={item}
          />
        ))
      }
    </div>
  );
};

export default Posts;