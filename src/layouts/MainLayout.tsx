import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navigation/Navbar';
import { PATHS } from '../routes/paths';
import { useAuth } from '../contexts/AuthContext';

export default function MainLayout() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={PATHS.LOGIN} state={{ from: location }} replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-true-black">
      <Navbar />
      <Outlet />
    </div>
  );
}