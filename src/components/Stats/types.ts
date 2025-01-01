import { Team } from '../Teams/types';

export interface MatchStats {
  id: string;
  date: string;
  teams: {
    team1: Team;
    team2: Team;
  };
  result: string;
  stats: {
    batting: BattingStats[];
    bowling: BowlingStats[];
    partnership: PartnershipStats[];
    extras: ExtrasStats;
  };
}

export interface BattingStats {
  playerId: string;
  playerName: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: number;
}

export interface BowlingStats {
  playerId: string;
  playerName: string;
  overs: number;
  maidens: number;
  runs: number;
  wickets: number;
  economy: number;
}

export interface PartnershipStats {
  players: string[];
  runs: number;
  balls: number;
}

export interface ExtrasStats {
  wides: number;
  noBalls: number;
  byes: number;
  legByes: number;
  total: number;
}

export interface TeamStats {
  team: Team;
  matchesPlayed: number;
  wins: number;
  losses: number;
  ties: number;
  netRunRate: number;
}

export interface PlayerPerformance {
  playerId: string;
  playerName: string;
  teamId: string;
  runs?: number;
  wickets?: number;
}

