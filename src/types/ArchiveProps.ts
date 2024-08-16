import { Weather } from "./Weather";

export interface ArchiveProps {
  scheduleId: string;
  weather: Weather;
  result: {
    homeTeam: number;
    awayTeam: number;
  };
  review: string;
  photo: string;
  userId: string;
  isPublic: boolean;
}
