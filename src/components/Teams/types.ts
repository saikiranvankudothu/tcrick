export interface Player {
  id: string;
  name: string;
  role: string;
  image: string;
  isCaptain: boolean;
  stats: {
    matches: number;
    runs?: number;
    wickets?: number;
    average?: number;
    strikeRate?: number;
    economy?: number;
  };
}

export interface TeamMatch {
  id: string;
  opponent: string;
  date: string;
  venue: string;
  result?: string;
  isUpcoming: boolean;
  isLive: boolean;
}

export interface Team {
  id: string;
  name: string;
  logo: string;
  rank: number;
  titles: number;
  players: Player[];
  matches: TeamMatch[];
}