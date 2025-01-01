import React, { useState } from 'react';
import { Circle, ChevronUp, ChevronDown } from 'lucide-react';

const keyEvents = [
  { over: '10.2', type: 'wicket', description: 'Rohit Sharma b Starc 45(36)', details: 'Starc bowls a perfect yorker, Rohit fails to dig it out and the ball crashes into the stumps.' },
  { over: '25.4', type: 'six', description: 'Kohli hits a massive six over long-on', details: 'Kohli steps out and lofts the ball straight over the bowler\'s head for a huge six!' },
  { over: '35.1', type: 'wicket', description: 'Shreyas Iyer c Carey b Cummins 28(24)', details: 'Iyer tries to pull a short ball but gets a top edge, Carey takes an easy catch behind the stumps.' },
  { over: '40.3', type: 'four', description: 'KL Rahul hits a boundary through covers', details: 'Rahul times the ball perfectly, placing it wide of the fielder at cover for a crisp four.' },
  { over: '42.1', type: 'wicket', description: 'KL Rahul run out 56(43)', details: 'Miscommunication between Rahul and Kohli leads to a run out. Direct hit from Maxwell at point catches Rahul short of his crease.' }
];

export default function TimelineSlider() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [expandedEvents, setExpandedEvents] = useState<number[]>([]);

  const toggleEventExpansion = (index: number) => {
    setExpandedEvents(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Key Events
      </h3>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />

        <div className="space-y-6">
          {keyEvents.map((event, index) => (
            <div
              key={index}
              className={`relative pl-8 transition-all duration-300 ${
                selectedEvent === index
                  ? 'bg-indigo-50 dark:bg-indigo-900/30 -mx-6 px-14 py-3 rounded-lg'
                  : ''
              }`}
            >
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
                <Circle
                  className={`w-4 h-4 ${
                    event.type === 'wicket'
                      ? 'text-red-500'
                      : event.type === 'six'
                      ? 'text-green-500'
                      : event.type === 'four'
                      ? 'text-blue-500'
                      : 'text-gray-400'
                  }`}
                  fill="currentColor"
                />
              </div>

              <div 
                className="flex items-start gap-3 cursor-pointer"
                onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
              >
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {event.over}
                </span>
                <div className="flex-grow">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {event.type.toUpperCase()}
                  </span>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {event.description}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleEventExpansion(index);
                  }}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  {expandedEvents.includes(index) ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
              </div>
              {expandedEvents.includes(index) && (
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 pl-14">
                  {event.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

