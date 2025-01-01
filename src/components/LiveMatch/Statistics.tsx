import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface StatisticsProps {
  compact?: boolean;
}

const battingStats = [
  { name: 'Virat Kohli', runs: 82, balls: 74, fours: 6, sixes: 2, strikeRate: 110.81 },
  { name: 'KL Rahul', runs: 56, balls: 43, fours: 4, sixes: 3, strikeRate: 130.23 },
  { name: 'Rohit Sharma', runs: 34, balls: 28, fours: 3, sixes: 1, strikeRate: 121.43 },
  { name: 'Shreyas Iyer', runs: 28, balls: 24, fours: 2, sixes: 1, strikeRate: 116.67 },
];

const bowlingStats = [
  { name: 'Mitchell Starc', overs: '9.3', maidens: 1, runs: 48, wickets: 2, economy: 5.05 },
  { name: 'Pat Cummins', overs: '10.0', maidens: 0, runs: 52, wickets: 1, economy: 5.20 },
  { name: 'Josh Hazlewood', overs: '8.0', maidens: 1, runs: 39, wickets: 0, economy: 4.88 },
  { name: 'Adam Zampa', overs: '10.0', maidens: 0, runs: 58, wickets: 1, economy: 5.80 },
];

export default function Statistics({ compact = false }: StatisticsProps) {
  const [activeTab, setActiveTab] = useState('batting');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBattingStats = battingStats.filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredBowlingStats = bowlingStats.filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          {compact ? 'Quick Stats' : 'Match Statistics'}
        </h2>
        {!compact && (
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('batting')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === 'batting'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              Batting
            </button>
            <button
              onClick={() => setActiveTab('bowling')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === 'bowling'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              Bowling
            </button>
          </div>
        )}
      </div>

      {!compact && (
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search player..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      )}

      <div className="overflow-x-auto">
        {activeTab === 'batting' && (
          <table className="min-w-full">
            <thead>
              <tr className="text-sm text-gray-500 dark:text-gray-400">
                <th className="text-left font-medium">Batter</th>
                <th className="text-center font-medium">R</th>
                <th className="text-center font-medium">B</th>
                {!compact && <th className="text-center font-medium">4s</th>}
                {!compact && <th className="text-center font-medium">6s</th>}
                <th className="text-right font-medium">SR</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {(compact ? battingStats.slice(0, 2) : filteredBattingStats).map((batter) => (
                <tr key={batter.name} className="text-sm">
                  <td className="py-3 text-gray-900 dark:text-white font-medium">
                    {batter.name}
                  </td>
                  <td className="py-3 text-center text-gray-900 dark:text-white">
                    {batter.runs}
                  </td>
                  <td className="py-3 text-center text-gray-500 dark:text-gray-400">
                    {batter.balls}
                  </td>
                  {!compact && (
                    <>
                      <td className="py-3 text-center text-gray-500 dark:text-gray-400">{batter.fours}</td>
                      <td className="py-3 text-center text-gray-500 dark:text-gray-400">{batter.sixes}</td>
                    </>
                  )}
                  <td className="py-3 text-right text-gray-500 dark:text-gray-400">
                    {batter.strikeRate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {activeTab === 'bowling' && (
          <table className="min-w-full">
            <thead>
              <tr className="text-sm text-gray-500 dark:text-gray-400">
                <th className="text-left font-medium">Bowler</th>
                <th className="text-center font-medium">O</th>
                {!compact && <th className="text-center font-medium">M</th>}
                <th className="text-center font-medium">R</th>
                <th className="text-center font-medium">W</th>
                <th className="text-right font-medium">ECO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {(compact ? bowlingStats.slice(0, 2) : filteredBowlingStats).map((bowler) => (
                <tr key={bowler.name} className="text-sm">
                  <td className="py-3 text-gray-900 dark:text-white font-medium">
                    {bowler.name}
                  </td>
                  <td className="py-3 text-center text-gray-500 dark:text-gray-400">
                    {bowler.overs}
                  </td>
                  {!compact && (
                    <td className="py-3 text-center text-gray-500 dark:text-gray-400">
                      {bowler.maidens}
                    </td>
                  )}
                  <td className="py-3 text-center text-gray-500 dark:text-gray-400">
                    {bowler.runs}
                  </td>
                  <td className="py-3 text-center text-gray-900 dark:text-white font-medium">
                    {bowler.wickets}
                  </td>
                  <td className="py-3 text-right text-gray-500 dark:text-gray-400">
                    {bowler.economy}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

