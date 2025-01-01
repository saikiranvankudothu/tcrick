import React, { useState } from 'react';
import { TeamStats } from './types';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface PointsTableProps {
  teamStats: TeamStats[];
}

type SortKey = 'wins' | 'losses' | 'ties' | 'netRunRate';

export default function PointsTable({ teamStats }: PointsTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('wins');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const sortedStats = [...teamStats].sort((a, b) => {
    if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
    if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const handleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('desc');
    }
  };

  const SortIcon = ({ column }: { column: SortKey }) => {
    if (column !== sortKey) return null;
    return sortOrder === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Points Table</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Team</th>
              <th className="px-6 py-3">MP</th>
              <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort('wins')}>
                W <SortIcon column="wins" />
              </th>
              <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort('losses')}>
                L <SortIcon column="losses" />
              </th>
              <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort('ties')}>
                T <SortIcon column="ties" />
              </th>
              <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort('netRunRate')}>
                NRR <SortIcon column="netRunRate" />
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedStats.map((stat, index) => (
              <tr
                key={stat.team.id}
                className={`${
                  index < 4 ? 'bg-green-100 dark:bg-green-900' : index > teamStats.length - 3 ? 'bg-red-100 dark:bg-red-900' : 'bg-white dark:bg-gray-800'
                } hover:bg-gray-50 dark:hover:bg-gray-700`}
              >
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  <div className="flex items-center">
                    <img src={stat.team.logo} alt={stat.team.name} className="w-6 h-6 mr-2" />
                    {stat.team.name}
                  </div>
                </td>
                <td className="px-6 py-4">{stat.matchesPlayed}</td>
                <td className="px-6 py-4">{stat.wins}</td>
                <td className="px-6 py-4">{stat.losses}</td>
                <td className="px-6 py-4">{stat.ties}</td>
                <td className="px-6 py-4">{stat.netRunRate.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

