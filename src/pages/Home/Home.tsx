import Badge from "../../components/common/Badge";
import Login from "../../components/common/Login";
import Navigaion from "../../components/common/Navigaion";

const Home = () => {
  return (
    <>
      <div className="flex justify-center text-4xl">홈</div>
      <Navigaion />
      <Login/>
      <Badge scheme="samsung" />
    </>
  );
};
export default Home;
