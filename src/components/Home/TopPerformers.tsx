import React from 'react';

const performers = [
  {
    id: 1,
    name: 'Virat Kohli',
    stat: '385 runs',
    category: 'Most Runs',
    team: 'India',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Mitchell Starc',
    stat: '15 wickets',
    category: 'Most Wickets',
    team: 'Australia',
    image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&q=80',
  },
];

export default function TopPerformers() {
  return (
    <div className="bg-white dark:bg-[#0D1117] rounded-xl shadow-md p-6 border border-gray-200 dark:border-[#161B22] hover:shadow-lg dark:hover:border-[#1F2937] hover:ring-2 dark:ring-[#1F6FEB] transition-shadow">
      <h2 className="text-xl font-bold text-gray-900 dark:text-[#C9D1D9] mb-4">Top Performers</h2>
      <div className="space-y-4">
        {performers.map(performer => (
          <div
            key={performer.id}
            className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-[#30363D] hover:border-indigo-500 dark:hover:border-[#1F6FEB] transition-colors"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={performer.image}
                alt={performer.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-500 dark:text-[#8B949E]">
                {performer.category}
              </p>
              <p className="text-lg font-semibold text-gray-900 dark:text-[#C9D1D9]">
                {performer.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-[#8B949E]">
                {performer.team}
              </p>
            </div>
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              {performer.stat}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}