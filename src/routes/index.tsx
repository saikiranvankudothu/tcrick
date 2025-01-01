import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PATHS } from './paths';

// Layouts
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';

// Auth pages
import Login from '../components/Login';
import Signup from '../components/Signup';
import ForgotPassword from '../components/ForgotPassword';

// App pages
import Home from '../components/Home';
import Profile from '../components/Profile';
import LiveMatchPage from '../components/LiveMatch/LiveMatchPage';
import TeamsPage from '../components/Teams/TeamsPage';
import TeamPage from '../components/Teams/TeamPage';
import SchedulePage from '../components/Schedule/SchedulePage';
import StatsPage from '../components/Stats/StatsPage';


export default function AppRoutes() {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route element={<AuthLayout />}>
        <Route path={PATHS.LOGIN} element={<Login />} />
        <Route path={PATHS.SIGNUP} element={<Signup />} />
        <Route path={PATHS.FORGOT_PASSWORD} element={<ForgotPassword />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<MainLayout />}>
        <Route path={PATHS.DASHBOARD} element={<Home />} />
        <Route path={PATHS.PROFILE} element={<Profile />} />
        <Route path={PATHS.LIVE_MATCH} element={<LiveMatchPage />} />
        <Route path={PATHS.TEAMS} element={<TeamsPage />} />
        <Route path={`${PATHS.TEAMS}/:teamId`} element={<TeamPage />} />
        <Route path={PATHS.SCHEDULE} element={<SchedulePage />} />
        <Route path={PATHS.STATS} element={<StatsPage />} />
      </Route>

      {/* Redirect root to dashboard or login based on auth status */}
      <Route path="/" element={<Navigate to={PATHS.DASHBOARD} replace />} />
      
      {/* 404 - Catch all route */}
      <Route path="*" element={<Navigate to={PATHS.DASHBOARD} replace />} />
    </Routes>
  );
}