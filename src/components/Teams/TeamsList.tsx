import React from 'react';
import { useNavigate } from 'react-router-dom';
import TeamCard from './TeamCard';
import { teams } from './teamsData';

export default function TeamsList() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teams.map((team) => (
        <TeamCard 
          key={team.id} 
          {...team} 
          onClick={() => navigate(`/teams/${team.id}`)}
        />
      ))}
    </div>
  );
}