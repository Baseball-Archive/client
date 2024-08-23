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
  isPublic: boolean | null;
  myTeam?: TeamScheme;
}
export interface SnakeArchive {
  schedule_id: number;
  weather: string | null;
  home_team_score: number;
  away_team_score: number;
  title: string;
  content: string;
  pic_url: string;
  is_public: boolean | null;
}
