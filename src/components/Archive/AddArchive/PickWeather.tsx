import React, { useState } from "react";

type Weather = "sun" | "cloud" | "rain" | null;

const PickWeather: React.FC = () => {
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
  const handleDelete = () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      alert("삭제 되었습니다.");
    }
  };
  const handleEdit = () => {
    if (window.confirm("수정 하시겠습니까?")) {
      alert("수정 되었습니다.");
    }
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
          ) : (
            <span>☀️</span>
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
            </span>
          </p>
        </div>
      )}
    </div>
  );
};
export default PickWeather;
