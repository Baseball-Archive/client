import React from "react";
import PickWeather from "./PickWeather";
import InfoSection from "./InfoSection";

const MatchInfo = () => {
  return (
    <div className="mx-auto max-w-md p-4">
      <InfoSection label="제목">
        <input></input>
      </InfoSection>

      <InfoSection label="날씨">
        <PickWeather />
      </InfoSection>
      <InfoSection label="직관 날짜">
        <p className="text-sm">2024.08.24</p>
      </InfoSection>

      <InfoSection label="경기 결과">
        <input></input>
      </InfoSection>

      {/* 점수 */}
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center text-lg">
          우리팀 점수: <span className="text-2xl font-bold">7</span>
        </div>
        <div className="text-center text-lg">
          상대팀 점수: <span className="text-2xl font-bold">5</span>
        </div>
      </div>
    </div>
  );
};

export default MatchInfo;
