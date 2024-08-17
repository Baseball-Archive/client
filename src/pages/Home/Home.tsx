import Badge from "../../components/common/Badge";
import InputText from "../../components/common/InputText";
import Login from "../User/Login";

const Home = () => {
  return (
    <>
      <div className="flex justify-center text-4xl">홈</div>
      <Login/>
      <InputText scheme="secondary" inputSize="medium" inputType="text"/>
      <Badge scheme="samsung" />
    </>
  );
};
export default Home;

