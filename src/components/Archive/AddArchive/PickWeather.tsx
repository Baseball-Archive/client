import { useState } from "react";
import { Weather } from "../../../types/Weather";

const WeatherEmojis = [
  { weather: "sun", emoji: "🌞" },
  { weather: "cloud", emoji: "☁️" },
  { weather: "rain", emoji: "☔" },
  { weather: "snow", emoji: "❄️" },
];

const PickWeather = () => {
  const [selectedEmoji, setSelectedEmoji] = useState<Weather>("null");
  const [isDropdownView, setDropdownView] = useState(false);

  const handleWeather = (weather: Weather) => {
    setSelectedEmoji(weather);
  };
  const handleClickContainer = () => {
    setDropdownView((prev) => !prev);
  };
  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };
  const renderEmoji = (selectedEmoji: Weather) => {
    switch (selectedEmoji) {
      case "cloud":
        return <div>☁️</div>;
      case "rain":
        return <span>☔</span>;
      case "sun":
        return <span>☀️</span>;
      case "snow":
        return <span>❄️</span>;
      case "null":
        return <span className="text-lg">날씨를 선택하세요.</span>;
    }
  };

  return (
    <div className="relative flex h-full w-full" onBlur={handleBlurContainer}>
      <button
        onClick={handleClickContainer}
        className="flex w-full items-center justify-start px-4 text-2xl text-gray-400"
      >
        {selectedEmoji && renderEmoji(selectedEmoji)}
      </button>

      {isDropdownView && (
        <div className="absolute left-1/2 top-full flex h-12 w-full -translate-x-1/2 items-center justify-center rounded-[4px] border bg-white">
          <p className="flex gap-x-20 text-2xl">
            {WeatherEmojis.map(({ weather, emoji }) => (
              <span
                key={weather}
                onClick={() => handleWeather(weather as Weather)}
                className={
                  selectedEmoji === weather
                    ? ""
                    : "cursor-pointer brightness-[0.5]"
                }
              >
                {emoji}
              </span>
            ))}
          </p>
        </div>
      )}
    </div>
  );
};

export default PickWeather;
