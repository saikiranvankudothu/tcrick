import React from 'react';
import TeamsList from './TeamsList';

export default function TeamsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Teams</h1>
      <TeamsList />
    </div>
  );
}