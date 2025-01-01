import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountdownTimer from './CountdownTimer';

interface MatchCardProps {
  id: string;
  team1: { name: string; logo: string };
  team2: { name: string; logo: string };
  date: string;
  time: string;
  venue: string;
  status: 'live' | 'completed' | 'upcoming';
}

export default function MatchCard({ id, team1, team2, date, time, venue, status }: MatchCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        {status === 'live' && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-400">
            LIVE NOW
          </span>
        )}
        
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src={team1.logo} alt={team1.name} className="w-12 h-12 object-contain" />
            <span className="text-xl font-semibold text-gray-900 dark:text-white">vs</span>
            <img src={team2.logo} alt={team2.name} className="w-12 h-12 object-contain" />
          </div>
          
          {status === 'upcoming' && <CountdownTimer date={`${date} ${time}`} />}
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
            <Clock className="w-4 h-4 ml-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>{venue}</span>
          </div>
        </div>

        {status === 'completed' && (
          <Link
            to={`/matches/${id}/highlights`}
            className="mt-4 block text-center text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            Watch Highlights
          </Link>
        )}
      </div>
    </div>
  );
}