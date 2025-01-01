import React from 'react';
import { Trophy, Users } from 'lucide-react';
import { Team } from './types';

interface TeamDetailsProps {
  team: Team;
}

export default function TeamDetails({ team }: TeamDetailsProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <div className="flex items-center gap-6">
        <div className="w-24 h-24 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-4">
          <img src={team.logo} alt={team.name} className="w-full h-full object-contain" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{team.name}</h2>
          <div className="mt-2 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Trophy className="w-4 h-4 text-yellow-500" />
              {team.titles} Titles
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-indigo-500" />
              {team.players.length} Players
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}