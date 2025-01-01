import React, { useEffect } from 'react';
import { X, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { NavLinks } from './navData';
import { useAuth } from '../../contexts/AuthContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLinks[];
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const { logout } = useAuth();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleLogout = () => {
    onClose();
    logout();
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`fixed inset-y-0 left-0 w-[280px] bg-white dark:bg-true-black transform transition-transform duration-300 ease-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-200 dark:border-true-black">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-true-black min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-gray-500 dark:text-white" />
              </button>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto py-4">
            <div className="px-4 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center min-h-[44px] px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400'
                        : 'text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-true-black'
                    }`
                  }
                >
                  <link.icon className="w-5 h-5 mr-3" />
                  {link.label}
                </NavLink>
              ))}
            </div>
          </nav>

          <div className="p-4 border-t border-gray-200 dark:border-true-black">
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/50 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5 mr-3" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}