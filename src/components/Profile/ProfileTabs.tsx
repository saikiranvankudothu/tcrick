import React from 'react';
import { Grid, BookOpen, Heart, TrendingUp } from 'lucide-react';

interface ProfileTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function ProfileTabs({ activeTab, onTabChange }: ProfileTabsProps) {
  const tabs = [
    { id: 'posts', label: 'Posts', icon: Grid },
    { id: 'articles', label: 'Articles', icon: BookOpen },
    { id: 'liked', label: 'Liked', icon: Heart },
    { id: 'stats', label: 'Stats', icon: TrendingUp },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md mb-6 overflow-x-auto">
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-4 px-4 text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              <Icon className="w-5 h-5" />
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

