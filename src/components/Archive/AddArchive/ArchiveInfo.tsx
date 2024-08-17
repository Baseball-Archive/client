import PickWeather from "./PickWeather";
import InfoSection from "./InfoSection";
import PickDate from "./PickDate";
import MatchReview from "./MatchReview";
import PickMatch from "./PickMatch";
import UploadPhotoButton from "./UploadPhotoButton";
import PickScore from "./PickScore";
import { useState } from "react";
import { Weather } from "../../../types/Weather";
import { MatchData } from "../../../types/MatchData";
import PickIsPublic from "./PickIsPublic";
import { set } from "date-fns";

const ArchiveInfo = () => {
  const [homeScore, setHomeScore] = useState<number>(0);
  const [awayScore, setAwayScore] = useState<number>(0);
  const [selectedEmoji, setSelectedEmoji] = useState<Weather | null>(null);
  const [selectedMatch, setSelectedMatch] = useState<MatchData | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [review, setReview] = useState("");
  const [isPublic, setIsPublic] = useState<boolean | null>(null);
  const [title, setTitle] = useState("");

  const handleHomeScore = (score: number) => {
    setHomeScore(score);
  };
  const handleAwayScore = (score: number) => {
    setAwayScore(score);
  };
  const handleSelectedEmoji = (emoji: Weather | null) => {
    setSelectedEmoji(emoji);
  };
  const handleSelectedMatch = (match: MatchData | null) => {
    setSelectedMatch(match);
  };
  const handleSelectedDate = (date: Date | null) => {
    setSelectedDate(date);
  };
  const handleReview = (reviewText: string) => {
    setReview(reviewText);
  };
  const handleIsPublic = (isPublicStatus: boolean | null) => {
    setIsPublic(isPublicStatus);
  };
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  console.log(
    homeScore,
    awayScore,
    selectedEmoji,
    selectedMatch,
    selectedDate,
    review,
    isPublic,
    title,
  );
  return (
    <div className="container pt-6 scrollbar-hide">
      <InfoSection label="제목 ">
        <input
          className="w-full px-4 outline-none"
          placeholder="제목을 입력하세요."
          onChange={handleTitleChange}
        ></input>
      </InfoSection>
      <InfoSection label="직관한 날짜">
        <PickDate
          selectedDate={selectedDate}
          setSelectedDate={handleSelectedDate}
        />
      </InfoSection>
      <InfoSection label="경기 선택">
        <PickMatch
          selectedMatch={selectedMatch}
          setSelectedMatch={handleSelectedMatch}
        />
      </InfoSection>
      <InfoSection label="날씨">
        <PickWeather
          selectedEmoji={selectedEmoji}
          setSelectedEmoji={handleSelectedEmoji}
        />
      </InfoSection>
      <div className="flex flex-col">
        <label className="mb-1 text-base">경기 결과</label>
      </div>
      <PickScore
        homeScore={homeScore}
        awayScore={awayScore}
        setHomeScore={handleHomeScore}
        setAwayScore={handleAwayScore}
        selectedMatch={selectedMatch}
      />
      <MatchReview review={review} setReview={handleReview} />
      <UploadPhotoButton />
      <div className="mt-6 flex flex-col">
        <label className="mb-2 text-base">공개 설정</label>
        <PickIsPublic isPublic={isPublic} setIsPublic={handleIsPublic} />
        <button
          type="submit"
          className="mt-6 h-20 rounded-[10px] bg-black text-2xl font-medium text-white"
        >
          기록하기
        </button>
      </div>
    </div>
  );
};

export default ArchiveInfo;
