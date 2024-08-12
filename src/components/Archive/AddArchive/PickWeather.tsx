import React, { useState } from "react";

type Weather = "sun" | "cloud" | "rain" | null;

const PickWeather: React.FC = () => {
  const [selectedEmoji, setSelectedEmoji] = useState<Weather>(null);
  const handleWeather = (emoji: Weather) => {
    setSelectedEmoji(emoji);
  };

  return (
    <div>
      <p className="text-sm">
        <span
          onClick={() => handleWeather("sun")}
          className={
            selectedEmoji === "sun" ? "" : "cursor-pointer brightness-[0.5]"
          }
        >
          ☀️
        </span>
        <span
          onClick={() => handleWeather("cloud")}
          className={
            selectedEmoji === "cloud" ? "" : "cursor-pointer brightness-[0.5]"
          }
        >
          ☁️
        </span>
        <span
          onClick={() => handleWeather("rain")}
          className={
            selectedEmoji === "rain" ? "" : "cursor-pointer brightness-[0.5]"
          }
        >
          ☔
        </span>
      </p>
    </div>
  );
};
export default PickWeather;
