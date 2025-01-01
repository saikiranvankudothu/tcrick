import React from 'react';

const teams = [
  { name: 'India', matches: 7, won: 6, lost: 1, points: 12, nrr: '+1.258' },
  { name: 'Australia', matches: 7, won: 5, lost: 2, points: 10, nrr: '+0.975' },
  { name: 'England', matches: 7, won: 4, lost: 3, points: 8, nrr: '+0.456' },
  { name: 'South Africa', matches: 7, won: 4, lost: 3, points: 8, nrr: '+0.234' },
];

export default function PointsTable() {
  return (
    <div className="bg-white dark:bg-[#0D1117] rounded-xl shadow-md p-6 mb-8 border border-gray-200 dark:border-[#161B22] hover:shadow-lg dark:hover:border-[#1F2937] hover:ring-2 dark:ring-[#1F6FEB] transition-shadow">
      <h2 className="text-xl font-bold text-gray-900 dark:text-[#C9D1D9] mb-4">Points Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-[#30363D]">
              <th className="text-left py-3 text-sm font-medium text-gray-500 dark:text-[#8B949E]">Team</th>
              <th className="text-center py-3 text-sm font-medium text-gray-500 dark:text-[#8B949E]">M</th>
              <th className="text-center py-3 text-sm font-medium text-gray-500 dark:text-[#8B949E]">W</th>
              <th className="text-center py-3 text-sm font-medium text-gray-500 dark:text-[#8B949E]">L</th>
              <th className="text-center py-3 text-sm font-medium text-gray-500 dark:text-[#8B949E]">Pts</th>
              <th className="text-right py-3 text-sm font-medium text-gray-500 dark:text-[#8B949E]">NRR</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-[#30363D]">
            {teams.map(team => (
              <tr key={team.name} className="group hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                <td className="py-3 text-gray-900 dark:text-[#C9D1D9] font-medium">{team.name}</td>
                <td className="py-3 text-center text-gray-500 dark:text-[#8B949E]">{team.matches}</td>
                <td className="py-3 text-center text-gray-500 dark:text-[#8B949E]">{team.won}</td>
                <td className="py-3 text-center text-gray-500 dark:text-[#8B949E]">{team.lost}</td>
                <td className="py-3 text-center text-gray-900 dark:text-[#C9D1D9] font-bold">{team.points}</td>
                <td className="py-3 text-right text-gray-500 dark:text-[#8B949E]">{team.nrr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}