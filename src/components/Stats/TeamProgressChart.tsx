import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MatchStats } from './types';

interface TeamProgressChartProps {
  matches: MatchStats[];
}

export default function TeamProgressChart({ matches }: TeamProgressChartProps) {
  const teamProgress: { [key: string]: { name: string, data: { date: string, cumulativeRuns: number }[] } } = {};

  matches.forEach(match => {
    const date = match.date;
    [match.teams.team1, match.teams.team2].forEach(team => {
      if (!teamProgress[team.id]) {
        teamProgress[team.id] = { name: team.name, data: [] };
      }
      const totalRuns = match.stats.batting
        .filter(stat => stat.playerId.startsWith(team.id))
        .reduce((sum, stat) => sum + stat.runs, 0);
      const lastEntry = teamProgress[team.id].data[teamProgress[team.id].data.length - 1];
      const cumulativeRuns = (lastEntry ? lastEntry.cumulativeRuns : 0) + totalRuns;
      teamProgress[team.id].data.push({ date, cumulativeRuns });
    });
  });

  const chartData = Object.values(teamProgress).map(team => ({
    name: team.name,
    data: team.data,
  }));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Team Progress</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" type="category" allowDuplicatedCategory={false} />
          <YAxis dataKey="cumulativeRuns" />
          <Tooltip />
          <Legend />
          {chartData.map((s, index) => (
            <Line
              dataKey="cumulativeRuns"
              data={s.data}
              name={s.name}
              key={s.name}
              stroke={`hsl(${index * 45}, 70%, 50%)`}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

