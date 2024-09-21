/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
import crash from'../assets/crash.png';
// BetButton component for different bet amounts
const BetButton: React.FC<{ amount: number }> = ({ amount }) => (
  <button className="px-6 py-2 bg-gradient-to-r from-red-400 to-yellow-500 text-white font-bold rounded-full transition duration-300 transform hover:scale-110">
    ${amount}
  </button>
);

const CrashBet: React.FC = () => {
  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
      <div className="relative w-full h-48 mb-6">
        <img 
          src={crash.src}
          alt="Crash Bet Game" 
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>
      <h3 className="text-3xl font-semibold mb-4 text-center">Crash Bet</h3>
      <p className="text-lg text-gray-400 mb-6 text-center">Bet on the crash multiplier and cash out before it crashes!</p>

      {/* Betting buttons */}
      <div className="flex flex-wrap justify-around mt-4">
        <BetButton amount={10} />
        <BetButton amount={50} />
        <BetButton amount={100} />
        <BetButton amount={500} />
      </div>
    </div>
  );
};

export default CrashBet;
