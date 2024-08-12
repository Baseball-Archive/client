import React, { useState } from "react";
import ReviewSection from "./ReviewSection";
import ArchiveHeader from "./ArchiveHeader";

type WeatherType = "맑음" | "비" | "흐림";

interface ArchiveProps {
  schedule_id: string;
  weather: WeatherType;
  result: string;
  review: string;
  photo: string;
  user_id: string;
}

const weatherEmojis: Record<WeatherType, string> = {
  맑음: "☀️",
  비: "☂️",
  흐림: "☁️",
};

const Archive: React.FC<ArchiveProps> = ({
  schedule_id,
  weather,
  result,
  review,
  photo,
  user_id,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-6 flex justify-center overflow-hidden bg-white">
      <div className="w-full max-w-lg">
        <ArchiveHeader
          user_id={user_id}
          schedule_id={schedule_id}
          weather={weather}
          weatherEmojis={weatherEmojis}
          profileImage={photo}
        />
        <div className="w-full flex-col items-center">
          <img src={photo} className="mb-4 h-96 w-full object-cover" />
          <ReviewSection
            review={review}
            result={result}
            isExpanded={isExpanded}
            onToggleExpand={() => setIsExpanded(!isExpanded)}
          />
        </div>
      </div>
    </div>
  );
};

export default Archive;
