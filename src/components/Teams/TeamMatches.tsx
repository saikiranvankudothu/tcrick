import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { TeamMatch } from './types';

interface TeamMatchesProps {
  matches: TeamMatch[];
  onMatchClick: (matchId: string) => void;
}

export default function TeamMatches({ matches, onMatchClick }: TeamMatchesProps) {
  const upcomingMatches = matches.filter(match => match.isUpcoming);
  const pastMatches = matches.filter(match => !match.isUpcoming && !match.isLive);
  const liveMatches = matches.filter(match => match.isLive);

  return (
    <div className="space-y-6">
      {liveMatches.length > 0 && (
        <section>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Live Matches</h3>
          <div className="space-y-4">
            {liveMatches.map(match => (
              <MatchCard key={match.id} match={match} onClick={onMatchClick} isLive />
            ))}
          </div>
        </section>
      )}

      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Upcoming Matches</h3>
        <div className="space-y-4">
          {upcomingMatches.map(match => (
            <MatchCard key={match.id} match={match} onClick={onMatchClick} />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Matches</h3>
        <div className="space-y-4">
          {pastMatches.slice(0, 5).map(match => (
            <MatchCard key={match.id} match={match} onClick={onMatchClick} />
          ))}
        </div>
      </section>
    </div>
  );
}

function MatchCard({ match, onClick, isLive }: { match: TeamMatch; onClick: (id: string) => void; isLive?: boolean }) {
  return (
    <div
      onClick={() => onClick(match.id)}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200 dark:border-gray-700"
    >
      <div className="p-4">
        {isLive && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
            Live
          </span>
        )}
        <div className="mt-2">
          <h4 className="text-lg font-medium text-gray-900 dark:text-white">
            vs {match.opponent}
          </h4>
          <div className="mt-2 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {match.date}
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {match.venue}
            </div>
          </div>
          {match.result && (
            <p className="mt-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
              {match.result}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}