import Button from "../../components/common/Button";
import Post from "./Post";

const Posts = () => {
  return (
    <>
      <div className="m-10">
        <header>
          <h2 className="text-2xl">커뮤니티</h2>
        </header>
        
        <main>
          <Post />
        </main>

        <footer>
          <Button size="medium" scheme="secondary">수정</Button>
          <Button size="medium" scheme="primary">작성</Button>
        </footer>
      </div>
    </>
  );
};

export default Posts;