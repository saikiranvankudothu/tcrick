import React from 'react';
import HeroSection from './HeroSection';
import LiveMatches from './LiveMatches';
import PointsTable from './PointsTable';
import UpcomingMatches from './UpcomingMatches';
import FanZone from './FanZone';
import NewsCarousel from './NewsCarousel';
import TopPerformers from './TopPerformers';
import Footer from './Footer';
import { useTheme } from '../../contexts/ThemeContext';

export default function Home() {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-true-black' : 'bg-gray-50'}`}>
      <main className="container mx-auto px-4 py-8 space-y-8">
        <HeroSection />
        <LiveMatches />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <UpcomingMatches />
            <NewsCarousel />
          </div>
          <div>
            <PointsTable />
            <TopPerformers />
          </div>
        </div>
        <FanZone />
      </main>
      <Footer />
    </div>
  );
}