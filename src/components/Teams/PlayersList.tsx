import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Player } from './types';

interface PlayersListProps {
  players: Player[];
}

export default function PlayersList({ players }: PlayersListProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search players..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlayers.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
}

function PlayerCard({ player }: { player: Player }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700 p-4">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img src={player.image} alt={player.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{player.name}</h3>
            {player.isCaptain && (
              <span className="px-2 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full">
                Captain
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{player.role}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-500 dark:text-gray-400">Matches</p>
          <p className="font-medium text-gray-900 dark:text-white">{player.stats.matches}</p>
        </div>
        {player.stats.runs !== undefined && (
          <div>
            <p className="text-gray-500 dark:text-gray-400">Runs</p>
            <p className="font-medium text-gray-900 dark:text-white">{player.stats.runs}</p>
          </div>
        )}
        {player.stats.wickets !== undefined && (
          <div>
            <p className="text-gray-500 dark:text-gray-400">Wickets</p>
            <p className="font-medium text-gray-900 dark:text-white">{player.stats.wickets}</p>
          </div>
        )}
        {player.stats.average !== undefined && (
          <div>
            <p className="text-gray-500 dark:text-gray-400">Average</p>
            <p className="font-medium text-gray-900 dark:text-white">{player.stats.average}</p>
          </div>
        )}
      </div>
    </div>
  );
}