import PickWeather from "./PickWeather";
import InfoSection from "./InfoSection";

import PickDate from "./PickDate";

import MatchDetails from "./MatchDetails";
import PickMatch from "./PickMatch";
import UploadPhotoButton from "./UploadPhotoButton";
import OptionToggle from "./OptionToggle";

const ArchiveInfo = () => {
  const sections = [
    {
      label: "제목",
      component: (
        <input
          className="w-full px-4 outline-none"
          placeholder="제목을 입력하세요"
        />
      ),
    },
    { label: "날씨", component: <PickWeather /> },
    { label: "직관한 날짜", component: <PickDate /> },
    { label: "경기 선택", component: <PickMatch /> },
    {
      label: "경기 결과?승패 여부?",
      component: <input value="7:0" className="w-full px-4 outline-none" />,
    },
  ];
  return (
    <div className="container max-w-full overflow-x-hidden pt-6">
      {sections.map((section) => (
        <InfoSection label={section.label}>{section.component}</InfoSection>
      ))}
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
