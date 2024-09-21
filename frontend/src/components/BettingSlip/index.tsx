/* eslint-disable @typescript-eslint/no-explicit-any */
// components/BettingSlip.js

import React, { useState } from 'react';

const BettingSlip = ({ bet, onClose }: { bet: any, onClose: any }) => {
  const [betAmount, setBetAmount] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string>('Yes');


  const handleBetSubmit = () => {
    console.log(`Bet placed: ${bet.question}, Option: ${selectedOption}, Amount: ${betAmount}`);
    // Call backend here to submit the encrypted bet using Nillion's blind computation
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur">
      <div className="bg-gray-900 rounded-lg p-6 w-96 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-4">Bet Slip</h2>
        <p className="text-white text-lg mb-2">Question: <span className="font-semibold">{bet.question}</span></p>

        {/* Dropdown for Yes / No / Remains Same */}
        <div className="mb-4">
          <label className="block text-white text-sm font-medium mb-2">Select Bet Option</label>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border-gray-600 focus:outline-none focus:ring focus:border-purple-500"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Remains Same">Remains Same</option>
          </select>
        </div>

        {/* Bet Amount Input */}
        <div className="mb-4">
          <label className="block text-white text-sm font-medium mb-2">Enter Bet Amount</label>
          <input
            type="number"
            value={betAmount}
            onChange={(e) => setBetAmount(parseInt(e.target.value))}
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border-gray-600 focus:outline-none focus:ring focus:border-purple-500"
            placeholder="Enter amount"
          />
        </div>

        {/* Deadline Input */}
        

        {/* Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handleBetSubmit}
            className="px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-600 transition"
          >
            Place Bet
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-black rounded-lg hover:bg-red-600 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BettingSlip;
