import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MatchStats } from './types';

interface MatchListProps {
  matches: MatchStats[];
}

export default function MatchList({ matches }: MatchListProps) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {matches.map((match) => (
        <div
          key={match.id}
          onClick={() => navigate(`/stats/matches/${match.id}`)}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <img
                src={match.teams.team1.logo}
                alt={match.teams.team1.name}
                className="w-10 h-10 object-contain"
              />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">vs</span>
              <img
                src={match.teams.team2.logo}
                alt={match.teams.team2.name}
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              {match.date}
            </div>
            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              {match.result}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}