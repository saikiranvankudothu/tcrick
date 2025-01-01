import React from 'react';
import { Calendar, Clock, MapPin, Ticket } from 'lucide-react';
import { ScheduledMatch } from './types';
import { Link } from 'react-router-dom';

interface ScheduleListProps {
  matches: ScheduledMatch[];
}

export default function ScheduleList({ matches }: ScheduleListProps) {
  const groupedMatches = matches.reduce((acc, match) => {
    const date = new Date(match.date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(match);
    return acc;
  }, {} as Record<string, ScheduledMatch[]>);

  return (
    <div className="space-y-8">
      {Object.entries(groupedMatches).map(([date, dateMatches]) => (
        <div key={date}>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{date}</h3>
          <div className="space-y-4">
            {dateMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function MatchCard({ match }: { match: ScheduledMatch }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {match.tournament}
          </span>
          <StatusBadge status={match.status} />
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <TeamInfo team={match.homeTeam} />
            <span className="text-xl font-bold text-gray-400 dark:text-gray-500">vs</span>
            <TeamInfo team={match.awayTeam} />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {match.date}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {match.time}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {match.venue}
          </div>
        </div>

        {match.status === 'upcoming' && match.tickets?.available && (
          <div className="mt-4">
            <Link
              to={match.tickets.url || '#'}
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
            >
              <Ticket className="w-4 h-4" />
              Book Tickets
            </Link>
          </div>
        )}

        {match.status === 'completed' && match.result && (
          <div className="mt-4">
            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              {match.result}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: ScheduledMatch['status'] }) {
  const styles = {
    upcoming: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    live: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
    completed: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status]}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

function TeamInfo({ team }: { team: ScheduledMatch['homeTeam'] }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 p-2">
        <img src={team.logo} alt={team.name} className="w-full h-full object-contain" />
      </div>
      <span className="font-medium text-gray-900 dark:text-white">{team.name}</span>
    </div>
  );
}