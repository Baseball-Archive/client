import { useState } from 'react';
import { Weather } from '../../../types/Weather';

interface PickWeatherProps {
  selectedWeather: Weather | null;
  handleWeather: (emoji: Weather) => void;
}

const WeatherEmojis = [
  { weather: 'sun', emoji: '🌞' },
  { weather: 'cloud', emoji: '☁️' },
  { weather: 'rain', emoji: '☔' },
  { weather: 'snow', emoji: '❄️' },
];

const PickWeather = ({ selectedWeather, handleWeather }: PickWeatherProps) => {
  const [isDropdownView, setDropdownView] = useState(false);

  const handleClickContainer = () => {
    setDropdownView((prev) => !prev);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };

  const renderEmoji = (selectedWeather: Weather) => {
    switch (selectedWeather) {
      case 'cloud':
        return <span>☁️</span>;
      case 'rain':
        return <span>☔</span>;
      case 'sun':
        return <span>🌞</span>;
      case 'snow':
        return <span>❄️</span>;
      default:
        return null;
    }
  };

  return (
    <div className="relative flex h-full w-full" onBlur={handleBlurContainer}>
      <button
        onClick={handleClickContainer}
        type="button"
        className="flex w-full items-center justify-start px-4 text-gray-400"
      >
        {selectedWeather ? (
          renderEmoji(selectedWeather)
        ) : (
          <span className="text-gray-400">날씨를 선택하세요</span>
        )}
      </button>

      {isDropdownView && (
        <div className="absolute left-1/2 top-full flex h-12 w-full -translate-x-1/2 items-center justify-center rounded-[4px] border bg-white">
          <p className="flex gap-x-2">
            {WeatherEmojis.map(({ weather, emoji }) => (
              <span
                key={weather}
                onClick={() => handleWeather(weather as Weather)}
                className={
                  selectedWeather === weather
                    ? ''
                    : 'cursor-pointer brightness-[0.5]'
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
