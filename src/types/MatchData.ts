import { TeamScheme } from "./TeamScheme";

export interface MatchData {
  matchDate?: string;
  homeTeam: TeamScheme;
  awayTeam: TeamScheme;
  stadium: string;
}
