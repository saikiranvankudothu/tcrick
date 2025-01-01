import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MatchStats, PlayerPerformance } from './types';

interface TopPerformersChartProps {
  matches: MatchStats[];
}

export default function TopPerformersChart({ matches }: TopPerformersChartProps) {
  const getTopPerformers = (matches: MatchStats[], category: 'runs' | 'wickets', limit: number): PlayerPerformance[] => {
    const performances: { [key: string]: PlayerPerformance } = {};

    matches.forEach(match => {
      match.stats[category === 'runs' ? 'batting' : 'bowling'].forEach(stat => {
        const key = `${stat.playerId}-${stat.playerName}`;
        if (!performances[key]) {
          performances[key] = { playerId: stat.playerId, playerName: stat.playerName, teamId: '', runs: 0, wickets: 0 };
        }
        performances[key][category] = (performances[key][category] || 0) + (category === 'runs' ? stat.runs : stat.wickets);
      });
    });

    return Object.values(performances)
      .sort((a, b) => (b[category] || 0) - (a[category] || 0))
      .slice(0, limit);
  };

  const topBatsmen = getTopPerformers(matches, 'runs', 5);
  const topBowlers = getTopPerformers(matches, 'wickets', 5);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Top Performers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">Top Batsmen</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={topBatsmen}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="playerName" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="runs" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">Top Bowlers</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={topBowlers}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="playerName" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="wickets" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

