export interface MatchData {
  match_date: string;
  id?: number;
  home_team_id: number;
  away_team_id: number;
  stadium: string;
  time: string;
}

export interface ScheduleItem {
  id: number;
  away_team_id: number;
  home_team_id: number;
  match_date: string;
  stadium: string;
  time: string;
}
