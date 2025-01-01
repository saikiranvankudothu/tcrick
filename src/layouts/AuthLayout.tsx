import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { PATHS } from '../routes/paths';
import { useAuth } from '../contexts/AuthContext';

export default function AuthLayout() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (isAuthenticated) {
    return <Navigate to={PATHS.DASHBOARD} replace />;
  }

  return <Outlet />;
}