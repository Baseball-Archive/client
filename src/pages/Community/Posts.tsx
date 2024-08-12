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
      </div>
    </>
  );
};

export default Posts;