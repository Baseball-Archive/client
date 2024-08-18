import Archive from "../../components/Archive/Archive";
import { ArchiveProps } from "../../types/ArchiveProps";
import { Weather } from "../../types/Weather";

const dummyData: ArchiveProps = {
  photo:
    "https://firebasestorage.googleapis.com/v0/b/hotsix-blog-5f9b1.appspot.com/o/image%2F1723386154075?alt=media&token=04777f33-ef7b-4c50-bb0c-b748c2f6b8cf",
  weather: "cloud",
  review:
    "한화 연승?                                 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥",
  userId: "baseball.lover",
  scheduleId: "2024.08.27",
  result: { homeTeam: 7, awayTeam: 5 },
  isPublic: false,
};

const Archives = () => {
  return (
    <div className="container relative mb-32 px-2 pt-7">
      <Archive {...dummyData} />
      <Archive {...dummyData} /> <Archive {...dummyData} />
      <Archive {...dummyData} /> <Archive {...dummyData} />
    </div>
  );
};
export default Archives;
