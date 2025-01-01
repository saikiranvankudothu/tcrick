import React from 'react';
import { Filter, X } from 'lucide-react';
import { ScheduleFilters } from './types';

interface ScheduleFiltersProps {
  filters: ScheduleFilters;
  onFilterChange: (filters: ScheduleFilters) => void;
  onReset: () => void;
}

export default function ScheduleFilters({ filters, onFilterChange, onReset }: ScheduleFiltersProps) {
  const tournaments = ['World Cup', 'T20 Series', 'Test Series'];
  const statuses = ['upcoming', 'live', 'completed'];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <h3 className="font-medium text-gray-900 dark:text-white">Filters</h3>
        </div>
        <button
          onClick={onReset}
          className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 flex items-center gap-1"
        >
          <X className="w-4 h-4" />
          Reset
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Tournament
          </label>
          <select
            value={filters.tournament}
            onChange={(e) => onFilterChange({ ...filters, tournament: e.target.value })}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-sm"
          >
            <option value="">All Tournaments</option>
            {tournaments.map((tournament) => (
              <option key={tournament} value={tournament}>
                {tournament}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Status
          </label>
          <select
            value={filters.status}
            onChange={(e) => onFilterChange({ ...filters, status: e.target.value })}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-sm"
          >
            <option value="">All Matches</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            From
          </label>
          <input
            type="date"
            value={filters.dateRange.start}
            onChange={(e) =>
              onFilterChange({
                ...filters,
                dateRange: { ...filters.dateRange, start: e.target.value },
              })
            }
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            To
          </label>
          <input
            type="date"
            value={filters.dateRange.end}
            onChange={(e) =>
              onFilterChange({
                ...filters,
                dateRange: { ...filters.dateRange, end: e.target.value },
              })
            }
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-sm"
          />
        </div>
      </div>
    </div>
  );
}