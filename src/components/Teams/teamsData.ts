import { Team } from './types';

export const teams: Team[] = [
  {
    id: 'ind',
    name: 'India',
    logo: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80',
    rank: 1,
    titles: 3,
    players: [
      {
        id: 'vk-18',
        name: 'Virat Kohli',
        role: 'Batsman',
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80',
        isCaptain: false,
        stats: {
          matches: 265,
          runs: 12898,
          average: 57.32,
          strikeRate: 93.62
        }
      },
      {
        id: 'rsh-45',
        name: 'Rohit Sharma',
        role: 'Batsman',
        image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&q=80',
        isCaptain: true,
        stats: {
          matches: 248,
          runs: 10709,
          average: 49.12,
          strikeRate: 90.15
        }
      },
      {
        id: 'jb-96',
        name: 'Jasprit Bumrah',
        role: 'Bowler',
        image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80',
        isCaptain: false,
        stats: {
          matches: 72,
          wickets: 121,
          economy: 4.63,
          average: 24.30
        }
      }
    ],
    matches: [
      {
        id: 'ind-aus-1',
        opponent: 'Australia',
        date: '2024-03-25',
        venue: 'MCG, Melbourne',
        isUpcoming: true,
        isLive: false
      },
      {
        id: 'ind-eng-1',
        opponent: 'England',
        date: '2024-03-20',
        venue: 'Lords, London',
        result: 'Won by 5 wickets',
        isUpcoming: false,
        isLive: false
      },
      {
        id: 'ind-sa-1',
        opponent: 'South Africa',
        date: '2024-03-15',
        venue: 'Wanderers, Johannesburg',
        result: 'Lost by 3 wickets',
        isUpcoming: false,
        isLive: false
      }
    ]
  },
  {
    id: 'aus',
    name: 'Australia',
    logo: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80',
    rank: 2,
    titles: 5,
    players: [
      {
        id: 'pc-47',
        name: 'Pat Cummins',
        role: 'Bowler',
        image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&q=80',
        isCaptain: true,
        stats: {
          matches: 78,
          wickets: 145,
          economy: 4.76,
          average: 22.58
        }
      }
    ],
    matches: [
      {
        id: 'aus-ind-1',
        opponent: 'India',
        date: '2024-03-25',
        venue: 'MCG, Melbourne',
        isUpcoming: true,
        isLive: false
      }
    ]
  },
  {
    id: 'eng',
    name: 'England',
    logo: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80',
    rank: 3,
    titles: 2,
    players: [
      {
        id: 'jb-66',
        name: 'Jos Buttler',
        role: 'Wicket-keeper Batsman',
        image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80',
        isCaptain: true,
        stats: {
          matches: 168,
          runs: 4791,
          average: 41.31,
          strikeRate: 119.26
        }
      }
    ],
    matches: [
      {
        id: 'eng-ind-1',
        opponent: 'India',
        date: '2024-03-20',
        venue: 'Lords, London',
        result: 'Lost by 5 wickets',
        isUpcoming: false,
        isLive: false
      }
    ]
  }
];