import Badge from "../../components/common/Badge";
import Login from "../../components/common/Login";

const Home = () => {
  return (
    <>
      <div className="flex justify-center text-4xl">홈</div>
      <Login/>
      <Badge scheme="samsung" />
    </>
  );
};
export default Home;
