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
  createdAt?: string;
  updatedAt?: string;
  homeTeamId?: number;
  awayTeamId?: number;
  matchDate?: string | null;
  stadium?: string;
  userPicUrl?: string;
}

export interface PostArchiveProps {
  schedule_id?: number;
  weather: string | null;
  home_team_score: number;
  away_team_score: number;
  title: string;
  content: string;
  pic_url: string;
  is_public: boolean | null;
  created_at?: string;
  updated_at?: string;
}
export interface EditArchiveProps {
  id: number;
  archiveData: PostArchiveProps;
  stadium?: string;
  weather?: string;
}

export interface ArchiveContent {
  id?: number;
  matchDate: string;
  homeTeamName: string;
  awayTeamName: string;
  stadium: string;
  weather: string;
  homeTeamScore: number;
  awayTeamScore: number;
  content: string;
  title: string;
  picUrl: string;
  createdAt: string;
  nickname: string;
  likes: string;
  comments: string;
  myTeamName: string;
}
