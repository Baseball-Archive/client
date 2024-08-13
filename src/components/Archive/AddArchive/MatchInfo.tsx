import React from "react";
import PickWeather from "./PickWeather";
import InfoSection from "./InfoSection";
import SelectTeam from "./SelectTeam";

const MatchInfo = () => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="container pt-6">
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
        <p className="text-sm"></p>
      </InfoSection>
      <InfoSection label="우리팀 vs 상대팀">
        <SelectTeam />
      </InfoSection>{" "}
      <InfoSection label="직관한 날짜">
        <p className="text-sm"></p>
      </InfoSection>{" "}
      <InfoSection label="직관한 날짜">
        <p className="text-sm"></p>
      </InfoSection>
    </div>
  );
};

export default MatchInfo;
