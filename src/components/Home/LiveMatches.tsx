import React, { useState, useEffect } from 'react';
import { ExternalLink, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const initialMatches = [
  {
    id: 1,
    team1: { name: 'India', score: '285/4', overs: '42.3' },
    team2: { name: 'Australia', score: '264/10', overs: '48.2' },
    status: 'India needs 32 runs in 45 balls',
    isLive: true,
  },
  {
    id: 2,
    team1: { name: 'England', score: '235/6', overs: '50.0' },
    team2: { name: 'South Africa', score: '156/4', overs: '32.1' },
    status: 'South Africa needs 80 runs in 107 balls',
    isLive: true,
  },
];

export default function LiveMatches() {
  const [matches, setMatches] = useState(initialMatches);

  useEffect(() => {
    const interval = setInterval(() => {
      setMatches(prevMatches =>
        prevMatches.map(match => ({
          ...match,
          team1: {
            ...match.team1,
            score: updateScore(match.team1.score),
          },
          team2: {
            ...match.team2,
            score: updateScore(match.team2.score),
          },
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function updateScore(score) {
    const [runs, wickets] = score.split('/');
    return `${parseInt(runs) + Math.floor(Math.random() * 3)}/${wickets}`;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {matches.map(match => (
        <Link
          key={match.id}
          to={`/live-match/${match.id}`}
          className="block bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-400">
                <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
                LIVE
              </span>
              <ExternalLink className="h-5 w-5 text-gray-400" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{match.team1.name}</h3>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{match.team1.score}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{match.team1.overs} overs</p>
                </div>
                <span className="text-2xl font-bold text-gray-300 dark:text-gray-600">vs</span>
                <div className="text-right">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{match.team2.name}</h3>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{match.team2.score}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{match.team2.overs} overs</p>
                </div>
              </div>

              <div className="text-sm text-center text-indigo-600 dark:text-indigo-400 font-medium">
                {match.status}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

