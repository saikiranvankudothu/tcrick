import React, { useState } from 'react';
import { Search, Menu, Moon, Sun, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Cricket Tournament" className="h-8 w-auto" />
            <nav className="hidden md:flex ml-10 space-x-8">
              <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">Matches</a>
              <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">Teams</a>
              <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">News</a>
              <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">Stats</a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className={`${isSearchOpen ? 'block' : 'hidden'} md:block`}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isSearchOpen ? (
                <X className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              ) : (
                <Search className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              )}
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-gray-200" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>

            <Link
              to="/profile"
              className="relative w-10 h-10 rounded-full border-2 border-gray-200 dark:border-gray-700 overflow-hidden transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-full border border-black/10 dark:border-white/10" />
            </Link>

            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-200" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

