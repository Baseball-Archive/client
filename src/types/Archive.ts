import { MatchData } from './MatchData';
import { TeamScheme } from './TeamScheme';
import { Weather } from './Weather';

export interface Archive {
  id?: number;
  nickname?: string;
  title: string;
  scheduleId: number;
  weather: Weather | null;
  homeTeamScore: number;
  awayTeamScore: number;
  content: string;
  picUrl: string;
  isPublic: boolean | null;
  created_at?: string;
  updated_at?: string;
  homeTeamId?: number;
  awayTeamId?: number;
  matchDate?: string | null;
  staitium?: string;
}

export interface PostArchiveProps {
  schedule_id: number;
  weather: string | null;
  home_team_score: number;
  away_team_score: number;
  title: string;
  content: string;
  pic_url: string;
  is_public: boolean | null;
  created_at?: string;
}
