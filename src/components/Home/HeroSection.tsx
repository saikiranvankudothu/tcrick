import React, { useState, useEffect } from 'react';
import { Play, Clock } from 'lucide-react';

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex space-x-4 text-white mb-6">
      {Object.keys(timeLeft).map((interval) => (
        <div key={interval} className="flex flex-col items-center">
          <span className="text-3xl font-bold">{timeLeft[interval]}</span>
          <span className="text-xs uppercase">{interval}</span>
        </div>
      ))}
    </div>
  );
}

export default function HeroSection() {
  const nextMatchDate = "2024-03-25T14:30:00"; // Example date

  return (
    <div className="relative h-[400px] rounded-2xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80"
        alt="Cricket Match"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-600 text-white mb-4">
                NEXT MATCH
              </span>
              <h1 className="text-4xl font-bold text-white mb-4">
                IND vs AUS - Finals
              </h1>
              <CountdownTimer targetDate={nextMatchDate} />
              <p className="text-gray-200 mb-6">
                Don't miss the epic showdown between India and Australia in the tournament finals
              </p>
              <div className="flex space-x-4">
                <button className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Live
                </button>
                <button className="inline-flex items-center px-6 py-3 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors">
                  <Clock className="h-5 w-5 mr-2" />
                  Set Reminder
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

