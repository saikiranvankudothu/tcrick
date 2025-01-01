import React, { useState } from 'react';
import { Share2, ArrowLeft, MessageCircle, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ScoreCard from './ScoreCard';
import Commentary from './Commentary';
import Statistics from './Statistics';
import ScoreGraph from './ScoreGraph';
import TimelineSlider from './TimelineSlider';

export default function LiveMatchPage() {
  const [activeTab, setActiveTab] = useState('commentary');
  const [isNotificationsOn, setIsNotificationsOn] = useState(false);
  const navigate = useNavigate();

  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'IND vs AUS - Live Cricket Match',
        text: 'Watch the exciting match between India and Australia!',
        url: window.location.href,
      });
    } catch (error) {
      console.error('Error sharing:', error);
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const toggleNotifications = () => {
    setIsNotificationsOn(!isNotificationsOn);
    // Here you would typically implement the actual notification logic
    if (!isNotificationsOn) {
      alert('Match notifications turned on');
    } else {
      alert('Match notifications turned off');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16">
            <button
              onClick={() => navigate(-1)}
              className="mr-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">IND vs AUS</h1>
            <div className="ml-auto flex items-center space-x-4">
              <button
                onClick={toggleNotifications}
                className={`p-2 rounded-full ${
                  isNotificationsOn
                    ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Bell className="w-6 h-6" />
              </button>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <ScoreCard />
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="flex">
                  {['commentary', 'statistics', 'graph'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 px-4 py-3 text-sm font-medium capitalize ${
                        activeTab === tab
                          ? 'text-indigo-600 border-b-2 border-indigo-600'
                          : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-4">
                {activeTab === 'commentary' && <Commentary />}
                {activeTab === 'statistics' && <Statistics />}
                {activeTab === 'graph' && <ScoreGraph />}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <TimelineSlider />
            <Statistics compact />
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Fan Chat
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      What a match! Kohli is on fire today!
                    </p>
                    <p className="text-xs text-gray-400 mt-1">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Australia needs to pick up wickets quickly.
                    </p>
                    <p className="text-xs text-gray-400 mt-1">5 minutes ago</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Join the conversation..."
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

