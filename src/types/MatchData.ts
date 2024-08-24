export interface MatchData {
  matchDate: string;
  scheduleId: number;
  homeTeamId: number;
  awayTeamId: number;
  stadium: string;
}

export interface ScheduleItem {
  id: number;
  away_team_id: number;
  home_team_id: number;
  match_date: string;
  stadium: string;
  time: string;
}
