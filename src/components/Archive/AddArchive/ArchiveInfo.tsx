import PickWeather from "./PickWeather";
import InfoSection from "./InfoSection";

import PickDate from "./PickDate";

import MatchDetails from "./MatchDetails";
import PickMatch from "./PickMatch";
import UploadPhotoButton from "./UploadPhotoButton";
import OptionToggle from "./OptionToggle";

const ArchiveInfo = () => {
  return (
    <div className="scrollbar-hide container pt-6">
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
      <MatchDetails />
      <UploadPhotoButton />
      <div className="mb-10 mt-6 flex flex-col">
        <label className="mb-2 text-base">공개 설정</label>
        <OptionToggle firstOption="공개" secondOption="비공개" />
        <button className="my-10 h-20 rounded-[10px] bg-black text-2xl font-medium text-white">
          기록하기
        </button>
      </div>
    </div>
  );
};

export default ArchiveInfo;
