import { useState } from "react";

type Weather = "sun" | "cloud" | "rain" | "snow" | null;

const PickWeather = () => {
  const [selectedEmoji, setSelectedEmoji] = useState<Weather>(null);
  const handleWeather = (emoji: Weather) => {
    setSelectedEmoji(emoji);
  };
  const [isDropdownView, setDropdownView] = useState(false);
  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };

  return (
    <div className="relative flex h-full w-full" onBlur={handleBlurContainer}>
      <button
        onClick={handleClickContainer}
        className="flex w-full items-center justify-start px-4 text-2xl text-gray-400"
      >
        {selectedEmoji ? (
          selectedEmoji == "cloud" ? (
            <div>☁️</div>
          ) : selectedEmoji == "rain" ? (
            <span>☔</span>
          ) : selectedEmoji == "sun" ? (
            <span>☀️</span>
          ) : (
            <span>❄️</span>
          )
        ) : (
          <span className="text-lg">날씨를 선택하세요.</span>
        )}
      </button>

      {isDropdownView && (
        <div className="absolute left-1/2 top-full flex h-12 w-full -translate-x-1/2 items-center justify-center rounded-[4px] border bg-white">
          <p className="flex gap-x-20 text-2xl">
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
                selectedEmoji === "cloud"
                  ? ""
                  : "cursor-pointer brightness-[0.5]"
              }
            >
              ☁️
            </span>
            <span
              onClick={() => handleWeather("rain")}
              className={
                selectedEmoji === "rain"
                  ? ""
                  : "cursor-pointer brightness-[0.5]"
              }
            >
              ☔
            </span>{" "}
            <span
              onClick={() => handleWeather("snow")}
              className={
                selectedEmoji === "snow"
                  ? ""
                  : "cursor-pointer brightness-[0.5]"
              }
            >
              ❄️
            </span>
          </p>
        </div>
      )}
    </div>
  );
};
export default PickWeather;
