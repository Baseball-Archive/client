import Archive from "../../components/Archive/Archive";

const Home = () => {
  return (
    <div className="container pt-7">
      <Archive
        photo="https://firebasestorage.googleapis.com/v0/b/hotsix-blog-5f9b1.appspot.com/o/image%2F1723386154075?alt=media&token=04777f33-ef7b-4c50-bb0c-b748c2f6b8cf"
        weather="맑음"
        review="한화 연승?                                 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"
        user_id="baseball.lover"
        schedule_id="2024.08.27"
        result="⚾한화 7 : 5 키움"
      />
    </div>
  );
};
export default Home;
