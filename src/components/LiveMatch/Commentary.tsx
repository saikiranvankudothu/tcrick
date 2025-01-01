import React from 'react';
import { Circle } from 'lucide-react';

const commentary = [
  {
    over: '42.3',
    runs: '1',
    description: 'Kohli takes a single with a gentle push to mid-off',
    isKeyEvent: false
  },
  {
    over: '42.2',
    runs: '4',
    description: 'FOUR! Beautiful cover drive from Kohli',
    isKeyEvent: true
  },
  {
    over: '42.1',
    runs: '0',
    description: 'No run, defended back to the bowler',
    isKeyEvent: false
  }
];

export default function Commentary() {
  return (
    <div className="space-y-4">
      {commentary.map((ball, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg ${
            ball.isKeyEvent ? 'bg-indigo-50 dark:bg-indigo-900/30' : ''
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {ball.over}
            </span>
            <Circle
              className={`w-6 h-6 ${
                ball.runs === '4' || ball.runs === '6'
                  ? 'text-green-500'
                  : ball.runs === '0'
                  ? 'text-red-500'
                  : 'text-gray-400'
              }`}
              fill={ball.runs !== '0' ? 'currentColor' : 'none'}
            />
            <span className="font-medium text-gray-900 dark:text-white">
              {ball.runs}
            </span>
          </div>
          <p className="mt-1 text-gray-600 dark:text-gray-300">{ball.description}</p>
        </div>
      ))}
    </div>
  );
}