import InfoSection from "../Archive/AddArchive/InfoSection";
import MatchReview from "../Archive/AddArchive/MatchReview";
import PickDate from "../Archive/AddArchive/PickDate";
import PickMatch from "../Archive/AddArchive/PickMatch";
import PickWeather from "../Archive/AddArchive/PickWeather";
import UploadPhotoButton from "../Archive/AddArchive/UploadPhotoButton";

const PostInfo = () => {
  return (
    <div className="container pt-6 scrollbar-hide">
    <InfoSection label="제목">
      <input
        className="w-full px-4 outline-none"
        placeholder="제목을 입력하세요"
      ></input>
    </InfoSection>

    <InfoSection label="날씨">
      <PickWeather />
    </InfoSection>

    <InfoSection label="직관한 날짜">
      <PickDate />
    </InfoSection>

    <InfoSection label="경기 선택">
      <PickMatch />
    </InfoSection>

    <InfoSection label="경기 결과?승패 여부?">
      <input value="7:0" className="w-full px-4 outline-none"></input>
    </InfoSection>

    <MatchReview />

    <UploadPhotoButton />

    <div className="mb-10 mt-6 flex flex-col">
      <button className="my-10 h-20 rounded-[10px] bg-black text-2xl font-medium text-white">
        등록
      </button>
    </div>
  </div>
  );
};

export default PostInfo;