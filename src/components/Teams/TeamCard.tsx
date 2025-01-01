import React from 'react';
import { Trophy, Users } from 'lucide-react';
import { Team } from './types';

interface TeamCardProps extends Team {
  onClick: () => void;
}

export default function TeamCard({ name, logo, rank, titles, players, onClick }: TeamCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all cursor-pointer border border-gray-200 dark:border-gray-700"
    >
      <div className="p-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
            <img src={logo} alt={name} className="w-12 h-12 object-contain" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Rank #{rank}</p>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-gray-600 dark:text-gray-300">{titles} Titles</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-indigo-500" />
            <span className="text-sm text-gray-600 dark:text-gray-300">{players.length} Players</span>
          </div>
        </div>
      </div>
    </div>
  );
}