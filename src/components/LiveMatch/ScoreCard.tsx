import React from 'react';

const matchData = {
  team1: {
    name: 'India',
    score: '285/4',
    overs: '42.3',
    runRate: '6.71',
    reqRate: '7.84',
    batsmen: [
      { name: 'Virat Kohli', runs: '82', balls: '74', fours: '6', sixes: '2', strikeRate: '110.81' },
      { name: 'KL Rahul', runs: '56', balls: '43', fours: '4', sixes: '3', strikeRate: '130.23' }
    ]
  },
  team2: {
    name: 'Australia',
    score: '264/10',
    overs: '48.2'
  }
};

export default function ScoreCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{matchData.team1.name}</h2>
            <div className="mt-1 flex items-center gap-3">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">{matchData.team1.score}</span>
              <span className="text-gray-500 dark:text-gray-400">({matchData.team1.overs} ov)</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 dark:text-gray-400">CRR: {matchData.team1.runRate}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">RRR: {matchData.team1.reqRate}</div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-sm text-gray-500 dark:text-gray-400">
                <th className="text-left font-medium">Batsman</th>
                <th className="text-center font-medium">R</th>
                <th className="text-center font-medium">B</th>
                <th className="text-center font-medium">4s</th>
                <th className="text-center font-medium">6s</th>
                <th className="text-right font-medium">SR</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {matchData.team1.batsmen.map((batsman) => (
                <tr key={batsman.name} className="text-sm">
                  <td className="py-3 text-gray-900 dark:text-white font-medium">{batsman.name}</td>
                  <td className="py-3 text-center text-gray-900 dark:text-white">{batsman.runs}</td>
                  <td className="py-3 text-center text-gray-500 dark:text-gray-400">{batsman.balls}</td>
                  <td className="py-3 text-center text-gray-500 dark:text-gray-400">{batsman.fours}</td>
                  <td className="py-3 text-center text-gray-500 dark:text-gray-400">{batsman.sixes}</td>
                  <td className="py-3 text-right text-gray-500 dark:text-gray-400">{batsman.strikeRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-gray-500 dark:text-gray-400">
            {matchData.team2.name} {matchData.team2.score} ({matchData.team2.overs} ov)
          </div>
          <div className="mt-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
            India needs 32 runs in 45 balls
          </div>
        </div>
      </div>
    </div>
  );
}