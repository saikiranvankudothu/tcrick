import { Team } from '../Teams/types';

export interface ScheduledMatch {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  date: string;
  time: string;
  venue: string;
  tournament: string;
  status: 'upcoming' | 'live' | 'completed';
  result?: string;
  tickets?: {
    available: boolean;
    url?: string;
  };
}

export interface ScheduleFilters {
  tournament: string;
  team: string;
  status: string;
  dateRange: {
    start: string;
    end: string;
  };
}