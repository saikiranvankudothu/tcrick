import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const matches = [
  {
    id: 1,
    team1: 'New Zealand',
    team2: 'Pakistan',
    date: '2024-03-25',
    time: '14:30',
    venue: 'Eden Gardens, Kolkata',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    team1: 'Sri Lanka',
    team2: 'Bangladesh',
    date: '2024-03-27',
    time: '19:00',
    venue: 'R.Premadasa Stadium, Colombo',
    image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&q=80',
  },
];

export default function UpcomingMatches() {
  return (
    <div className="bg-white dark:bg-[#0D1117] rounded-xl shadow-md p-6 mb-8 border border-gray-200 dark:border-[#161B22] hover:shadow-lg dark:hover:border-[#1F2937] hover:ring-2 dark:ring-[#1F6FEB] transition-shadow">
      <h2 className="text-xl font-bold text-gray-900 dark:text-[#C9D1D9] mb-4">Upcoming Matches</h2>
      <div className="space-y-4">
        {matches.map(match => (
          <div
            key={match.id}
            className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-[#30363D] hover:border-indigo-500 dark:hover:border-[#1F6FEB] transition-all group"
          >
            <div className="absolute inset-0">
              <img
                src={match.image}
                alt=""
                className="w-full h-full object-cover opacity-20 dark:opacity-10"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/90 dark:from-[#0D1117] dark:via-[#0D1117]/95 dark:to-[#0D1117]/90" />
            </div>
            
            <div className="relative p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-[#C9D1D9] mb-2">
                {match.team1} vs {match.team2}
              </h3>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-[#8B949E]">
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-indigo-500 dark:text-indigo-400" />
                  {match.date}
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-indigo-500 dark:text-indigo-400" />
                  {match.time}
                </span>
                <span className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-indigo-500 dark:text-indigo-400" />
                  {match.venue}
                </span>
              </div>
              
              <div className="absolute top-4 right-4 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded text-sm font-medium">
                Upcoming
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}