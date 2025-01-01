import React, { useState } from 'react';
import { Menu, ShoppingBag } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import MobileMenu from './MobileMenu';
import ThemeToggle from './ThemeToggle';
import { navLinks } from './navData';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-true-black shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Cricket</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-true-black'
                  }`
                }
              >
                <link.icon className="w-5 h-5 mr-2" />
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Profile Link */}
            <Link
              to="/profile"
              className="relative w-10 h-10 rounded-full border-2 border-gray-200 dark:border-true-black overflow-hidden transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-full border border-black/10 dark:border-white/10" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-true-black transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6 text-gray-700 dark:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </header>
  );
}