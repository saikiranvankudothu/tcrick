import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TeamDetails from './TeamDetails';
import TeamMatches from './TeamMatches';
import PlayersList from './PlayersList';
import { teams } from './teamsData';

export default function TeamPage() {
  const { teamId } = useParams();
  const [selectedMatchId, setSelectedMatchId] = useState<string | null>(null);
  
  const team = teams.find(t => t.id === teamId);
  
  if (!team) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-gray-600 dark:text-gray-400">Team not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <TeamDetails team={team} />
      
      {selectedMatchId ? (
        <>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Team Squad</h2>
            <button
              onClick={() => setSelectedMatchId(null)}
              className="text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
            >
              Back to matches
            </button>
          </div>
          <PlayersList players={team.players} />
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Matches</h2>
          <TeamMatches 
            matches={team.matches} 
            onMatchClick={(matchId) => setSelectedMatchId(matchId)} 
          />
        </>
      )}
    </div>
  );
}