import { Weather } from '../types/Weather';

export const useRenderEmoji = (selectedWeather: Weather) => {
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
