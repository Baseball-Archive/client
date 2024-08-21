import { MatchData } from './MatchData';
import { TeamScheme } from './TeamScheme';
import { Weather } from './Weather';

export interface Archive {
  id: number;
  userId: string;
  weather: Weather;
  matchData: MatchData;
  result: {
    homeTeam: number;
    awayTeam: number;
  };
  title: string;
  review: string;
  photo: string;
  isPublic: boolean;
  myTeam?: TeamScheme;
}
