import { ScheduledMatch } from './types';
import { teams } from '../Teams/teamsData';

export const scheduleData: ScheduledMatch[] = [
  {
    id: 'match-1',
    homeTeam: teams[0], // India
    awayTeam: teams[1], // Australia
    date: '2024-03-25',
    time: '14:30',
    venue: 'MCG, Melbourne',
    tournament: 'World Cup',
    status: 'upcoming',
    tickets: {
      available: true,
      url: '/tickets/match-1',
    },
  },
  {
    id: 'match-2',
    homeTeam: teams[2], // England
    awayTeam: teams[0], // India
    date: '2024-03-20',
    time: '10:00',
    venue: 'Lords, London',
    tournament: 'Test Series',
    status: 'completed',
    result: 'India won by 5 wickets',
  },
  {
    id: 'match-3',
    homeTeam: teams[1], // Australia
    awayTeam: teams[2], // England
    date: '2024-03-22',
    time: '09:30',
    venue: 'Sydney Cricket Ground',
    tournament: 'T20 Series',
    status: 'live',
  },
];