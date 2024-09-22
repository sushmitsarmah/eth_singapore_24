
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

// import { useState, useEffect } from "react";
// import Image from 'next/image';
// import Navbar from "@/components/Navbar";
// import Slider from "@/components/slider";
// import { motion, AnimatePresence } from "framer-motion";
// import coinImage from '../../components/assets/coina.png';

// // Example token data structure (questions for each round)
// const allTokensRound1 = [
//   { name: "BTC", question: "Will BTC cross 63k this week?" },
//   { name: "ETH", question: "Will ETH reach $4000?" },
//   { name: "SOL", question: "Will SOL rise by 20%?" },
//   { name: "ADA", question: "Will ADA go above $2?" },
//   { name: "DOGE", question: "Will DOGE triple its value?" },
//   { name: "XRP", question: "Will XRP reach $1?" },
// ];

// const round2Questions = [
//   { name: "BTC", question: "Will BTC be between 60k and 62k this week?" },
//   { name: "ETH", question: "Will ETH remain between $3900 and $4100?" },
//   { name: "SOL", question: "Will SOL price fluctuate between $150 and $180?" },
//   { name: "ADA", question: "Will ADA price stay between $1.50 and $2?" },
//   { name: "DOGE", question: "Will DOGE remain within 0.2 - 0.3 USD?" },
//   { name: "XRP", question: "Will XRP remain between $0.90 and $1.10?" },
// ];

// const round3Questions = [
//   { name: "BTC", question: "Will BTC exceed 65k in 24 hours?" },
//   { name: "ETH", question: "Will ETH surpass $4500 by tomorrow?" },
//   { name: "SOL", question: "Will SOL price double in the next 7 days?" },
//   { name: "ADA", question: "Will ADA go past $2.50?" },
//   { name: "DOGE", question: "Will DOGE increase by 50% in the next week?" },
// ];

// const roundsData = [
//   {
//     round: 1,
//     deadline: "2 days remaining",
//     totalPool: "5k USDC",
//     level: "Easy",
//     questions: allTokensRound1,
//   },
//   {
//     round: 2,
//     deadline: "Locked",
//     totalPool: "Locked",
//     level: "Medium",
//     questions: round2Questions,
//   },
//   {
//     round: 3,
//     deadline: "Locked",
//     totalPool: "Locked",
//     level: "Hard",
//     questions: round3Questions,
//   },
// ];

// const BetPage = () => {
//   const [currentRound, setCurrentRound] = useState(1);
//   const [selectedTokens, setSelectedTokens] = useState<string[]>([]);
//   const [expandedToken, setExpandedToken] = useState<string | null>(null); // For expanding token question

//   // Handles token selection (10 max)
//   const handleTokenSelect = (token: string) => {
//     if (selectedTokens.includes(token)) {
//       setSelectedTokens(selectedTokens.filter((t) => t !== token)); // Deselect token
//     } else if (selectedTokens.length < 10) {
//       setSelectedTokens([...selectedTokens, token]); // Select token if less than 10
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-[#000000] via-[#202020] to-[#000000] text-white">
//       <Navbar />
//       <div className="container mx-auto mt-5">
//         <Slider />

//         <h1 className="text-6xl mt-20 font-bold text-center font-luckiest text-green-500 mb-16">
//           Moraq Leagues : Weekly Prediction Leagues
//         </h1>

//         {/* Render rounds */}
//         <div className="space-y-10">
//           {/* Round 1 - Active */}
//           <motion.div
//   className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg shadow-lg shadow-yellow-500 border border-gray-800 p-6"
// >
//   <h3 className="text-3xl text-yellow-500 mb-4 font-luckiest">Round 1 (Active)</h3>
//   <div className="flex justify-between items-center mb-6">
//     <p className="text-lg font-luckiest">
//       Deadline: <span className="text-white">2 days remaining</span>
//     </p>
//     <p className="text-lg font-luckiest">
//       Total Pool: <span className="text-green-400">5k USDC</span>
//     </p>
//   </div>

//   {/* Token List */}
//   <div className="space-y-8">
//   {/* Round 1 - Yes/No Questions */}
//   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//     {roundsData[0].questions.map((token, index) => (
//       <motion.div
//         key={index}
//         className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 rounded-lg border-yellow-500 shadow-md text-center"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <div className="flex flex-col items-center">
//           <Image src={coinImage} alt="Coin Image" width={60} height={60} />
//           <p className="text-xl text-white font-luckiest mt-4">{token.name}</p>
//         </div>
//         <p className="text-lg text-gray-300 mt-4 font-luckiest">{token.question}</p>
//         <div className="flex gap-4 justify-center mt-4">
//           <button
//             type="button"
//             className={`px-6 py-3 rounded-lg font-bold text-lg transition-all shadow-md ${
//               selectedTokens[token.name] === 'yes'
//                 ? "bg-green-600 border-4 border-green-400"
//                 : "bg-gray-700 text-white hover:bg-green-600"
//             }`}
//             onClick={() => handleTokenSelect(token.name, 'yes')}
//           >
//             Yes
//           </button>
//           <button
//             type="button"
//             className={`px-6 py-3 rounded-lg font-bold text-lg transition-all shadow-md ${
//               selectedTokens[token.name] === 'no'
//                 ? "bg-red-600 border-4 border-red-400"
//                 : "bg-gray-700 text-white hover:bg-red-600"
//             }`}
//             onClick={() => handleTokenSelect(token.name, 'no')}
//           >
//             No
//           </button>
//         </div>
//       </motion.div>
//     ))}
//   </div>
//   <p className="text-lg mt-4 text-gray-400 font-luckiest">
//     Selected Tokens: {Object.keys(selectedTokens).length} / 10
//   </p>

//   <button
//     type="submit"
//     className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold text-xl transition-all shadow-md transform hover:scale-105 font-luckiest"
//   >
//     Submit Round 1 Predictions
//   </button>

//   {/* Round 2 - Range Questions */}
//   <motion.div className="mt-10">
//     <h2 className="text-2xl text-yellow-500 mb-6">Round 2: Range Questions</h2>
//     {roundsData[1].questions.map((rangeQuestion, index) => (
//       <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-md border-yellow-500 text-center mb-6">
//         <p className="text-xl text-white font-luckiest mb-4">{rangeQuestion.question}</p>
//         <input
//           type="range"
//           min={rangeQuestion.min}
//           max={rangeQuestion.max}
//           value={selectedRange[index]}
//           onChange={(e) => handleRangeChange(index, e.target.value)}
//           className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
//         />
//         <p className="text-lg text-gray-300 mt-4 font-luckiest">
//           Your Prediction: {selectedRange[index]}
//         </p>
//       </div>
//     ))}
//     <button
//       type="submit"
//       className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold text-xl transition-all shadow-md transform hover:scale-105 font-luckiest"
//       onClick={() => submitRangePredictions()}
//     >
//       Submit Round 2 Predictions
//     </button>
//   </motion.div>

//   {/* Round 3 - User Input Questions */}
//   <motion.div className="mt-10">
//     <h2 className="text-2xl text-yellow-500 mb-6">Round 3: User Input Questions</h2>
//     {roundsData[2].questions.map((inputQuestion, index) => (
//       <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-md border-yellow-500 text-center mb-6">
//         <p className="text-xl text-white font-luckiest mb-4">{inputQuestion.question}</p>
//         <input
//           type="text"
//           className="w-full px-4 py-2 text-lg text-gray-900 bg-gray-300 rounded-md"
//           value={userInputs[index]}
//           onChange={(e) => handleUserInputChange(index, e.target.value)}
//           placeholder="Enter your prediction"
//         />
//       </div>
//     ))}
//     <button
//       type="submit"
//       className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold text-xl transition-all shadow-md transform hover:scale-105 font-luckiest"
//       onClick={() => submitUserInputs()}
//     >
//       Submit Round 3 Predictions
//     </button>
//   </motion.div>

//   {/* Locked Rounds */}
//   {roundsData.slice(1).map((round, index) => (
//     <motion.div
//       key={index}
//       className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg shadow-yellow-500 border border-gray-700 p-6 mt-8"
//     >
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="text-3xl text-yellow-500">Round {index + 2} ({round.level})</h3>
//         <p className="text-lg text-gray-400">Deadline: {round.deadline}</p>
//         <p className="text-lg text-gray-400">Total Pool: {round.totalPool}</p>
//       </div>
//       <p className="text-gray-400">This round is locked. Complete previous rounds to proceed.</p>
//     </motion.div>
//   ))}
// </div>
// </div>
// </div>
//     </div>
//   );
// };

// export default BetPage;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from "react";
import Image from 'next/image';
import Navbar from "@/components/Navbar";
import Slider from "@/components/slider";
import { motion } from "framer-motion";
import coinImage from '../../components/assets/coina.png';

// Example token data structure (questions for each round)
const allTokensRound1 = [
  { name: "BTC", question: "Will BTC cross 63k this week?" },
  { name: "ETH", question: "Will ETH reach $4000?" },
  { name: "SOL", question: "Will SOL rise by 20%?" },
  { name: "ADA", question: "Will ADA go above $2?" },
  { name: "DOGE", question: "Will DOGE triple its value?" },
  { name: "XRP", question: "Will XRP reach $1?" },
];

const round2Questions = [
  { name: "BTC", question: "Will BTC be between 60k and 62k this week?", min: 60000, max: 62000 },
  { name: "ETH", question: "Will ETH remain between $3900 and $4100?", min: 3900, max: 4100 },
  { name: "SOL", question: "Will SOL price fluctuate between $150 and $180?", min: 150, max: 180 },
  { name: "ADA", question: "Will ADA price stay between $1.50 and $2?", min: 1.5, max: 2 },
  { name: "DOGE", question: "Will DOGE remain within 0.2 - 0.3 USD?", min: 0.2, max: 0.3 },
  { name: "XRP", question: "Will XRP remain between $0.90 and $1.10?", min: 0.9, max: 1.1 },
];

const round3Questions = [
  { name: "BTC", question: "Will BTC exceed 65k in 24 hours?" },
  { name: "ETH", question: "Will ETH surpass $4500 by tomorrow?" },
  { name: "SOL", question: "Will SOL price double in the next 7 days?" },
  { name: "ADA", question: "Will ADA go past $2.50?" },
  { name: "DOGE", question: "Will DOGE increase by 50% in the next week?" },
];

const roundsData = [
  {
    round: 1,
    deadline: "2 days remaining",
    totalPool: "5k USDC",
    level: "Easy",
    questions: allTokensRound1,
  },
  {
    round: 2,
    deadline: "Locked",
    totalPool: "Locked",
    level: "Medium",
    questions: round2Questions,
  },
  {
    round: 3,
    deadline: "Locked",
    totalPool: "Locked",
    level: "Hard",
    questions: round3Questions,
  },
];

const BetPage = () => {
  const [currentRound, setCurrentRound] = useState(1);
  const [selectedTokens, setSelectedTokens] = useState<{ [key: string]: string }>({});
  const [selectedRange, setSelectedRange] = useState(Array(round2Questions.length).fill(0));
  const [userInputs, setUserInputs] = useState(Array(round3Questions.length).fill(''));

  const handleTokenSelect = (token: string, choice: string) => {
    setSelectedTokens({ ...selectedTokens, [token]: choice });
  };

  const handleRangeChange = (index: number, value: number) => {
    const newRange = [...selectedRange];
    newRange[index] = value;
    setSelectedRange(newRange);
  };

  const handleUserInputChange = (index: number, value: string) => {
    const newUserInputs = [...userInputs];
    newUserInputs[index] = value;
    setUserInputs(newUserInputs);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#000000] via-[#202020] to-[#000000] text-white">
      <Navbar />
      <div className="container mx-auto mt-5">
        <Slider />

        <h1 className="text-6xl mt-20 font-bold text-center font-luckiest text-green-500 mb-16">
          Moraq Leagues: Weekly Prediction Leagues
        </h1>

        {/* Render rounds */}
        <div className="space-y-10">
          {/* Round 1 - Active */}
          <motion.div
            className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg shadow-lg shadow-yellow-500 border border-gray-800 p-6"
          >
            <h3 className="text-3xl text-yellow-500 mb-4 font-luckiest">Round 1 (Active)</h3>
            <div className="flex justify-between items-center mb-6">
              <p className="text-lg font-luckiest">
                Deadline: <span className="text-white">2 days remaining</span>
              </p>
              <p className="text-lg font-luckiest">
                Total Pool: <span className="text-green-400">5k USDC</span>
              </p>
            </div>

            {/* Token List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {roundsData[0].questions.map((token, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 rounded-lg border-yellow-500 shadow-md text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col items-center">
                    <Image src={coinImage} alt="Coin Image" width={60} height={60} />
                    <p className="text-xl text-white font-luckiest mt-4">{token.name}</p>
                  </div>
                  <p className="text-lg text-gray-300 mt-4 font-luckiest">{token.question}</p>
                  <div className="flex gap-4 justify-center mt-4">
                    <button
                      type="button"
                      className={`px-6 py-3 rounded-lg font-bold text-lg transition-all shadow-md ${
                        selectedTokens[token.name] === 'yes'
                          ? "bg-green-600 border-4 border-green-400"
                          : "bg-gray-700 text-white hover:bg-green-600"
                      }`}
                      onClick={() => handleTokenSelect(token.name, 'yes')}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className={`px-6 py-3 rounded-lg font-bold text-lg transition-all shadow-md ${
                        selectedTokens[token.name] === 'no'
                          ? "bg-red-600 border-4 border-red-400"
                          : "bg-gray-700 text-white hover:bg-red-600"
                      }`}
                      onClick={() => handleTokenSelect(token.name, 'no')}
                    >
                      No
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-lg mt-4 text-gray-400 font-luckiest">
              Selected Tokens: {Object.keys(selectedTokens).length} / 10
            </p>

            <button
              type="submit"
              className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold text-xl transition-all shadow-md transform hover:scale-105 font-luckiest"
            >
              Submit Round 1 Predictions
            </button>
          </motion.div>
          {roundsData.slice(1).map((round, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg shadow-yellow-500 border border-gray-700 p-6 mt-8"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl text-yellow-500">Round {index + 2} ({round.level})</h3>
                <p className="text-lg text-gray-400">Deadline: {round.deadline}</p>
                <p className="text-lg text-gray-400">Total Pool: {round.totalPool}</p>
              </div>
              <p className="text-gray-400">This round is locked. Complete previous rounds to proceed.</p>
            </motion.div>
          ))}

  {/* Round 2 - Range Questions */}
<motion.div className="bg-gradient-to-br from-gray-900 via-gray-950 to-black rounded-lg shadow-lg shadow-yellow-500 border border-gray-800 p-8">
  <h2 className="text-3xl text-yellow-400 mb-6 font-bold">Round 2: Range Questions</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {roundsData[1].questions.map((rangeQuestion, index) => (
      <div key={index} className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-lg shadow-lg border-2 border-yellow-500 text-center mb-6">
        <p className="text-2xl text-white font-bold mb-4">{rangeQuestion.question}</p>
        
        <div className="relative mt-6 mb-4 flex justify-center">
          <input
            type="range"
            min={rangeQuestion.min}
            max={rangeQuestion.max}
            value={selectedRange[index]}
            onChange={(e) => handleRangeChange(index, parseInt(e.target.value))}
            className="w-3/4 h-3 bg-gray-600 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-gray-300 text-sm mt-2 w-3/4">
            <span>{rangeQuestion.min}</span>
            <span>{rangeQuestion.max}</span>
          </div>
        </div>

        <p className="text-lg text-yellow-400 font-semibold">
          Your Prediction: {selectedRange[index]}
        </p>
      </div>
    ))}
  </div>
  
  <button
    type="submit"
    className="mt-8 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-8 py-4 rounded-lg font-bold text-2xl transition-all shadow-lg transform hover:scale-105"
  >
    Submit Round 2 Predictions
  </button>
</motion.div>
{roundsData.slice(1).map((round, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg shadow-yellow-500 border border-gray-700 p-6 mt-8"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl text-yellow-500">Round {index + 2} ({round.level})</h3>
                <p className="text-lg text-gray-400">Deadline: {round.deadline}</p>
                <p className="text-lg text-gray-400">Total Pool: {round.totalPool}</p>
              </div>
              <p className="text-gray-400">This round is locked. Complete previous rounds to proceed.</p>
            </motion.div>
          ))}

{/* Round 3 - User Input Questions */}
<motion.div className="bg-gradient-to-br from-gray-900 via-gray-950 to-black rounded-lg shadow-lg shadow-yellow-500 border border-gray-800 p-8">
  <h2 className="text-3xl text-yellow-400 mb-6 font-bold">Round 3: User Input Questions</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {roundsData[2].questions.map((inputQuestion, index) => (
      <div key={index} className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-lg shadow-lg border-2 border-yellow-500 text-center mb-6">
        <p className="text-2xl text-white font-bold mb-4">{inputQuestion.question}</p>
        <div className="flex justify-center">
          <input
            type="text"
            className="w-3/4 px-4 py-3 text-lg text-gray-900 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={userInputs[index]}
            onChange={(e) => handleUserInputChange(index, e.target.value)}
            placeholder="Enter your prediction"
          />
        </div>
      </div>
    ))}
  </div>

  <button
    type="submit"
    className="mt-8 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-8 py-4 rounded-lg font-bold text-2xl transition-all shadow-lg transform hover:scale-105"
  >
    Submit Round 3 Predictions
  </button>
</motion.div>
        </div>
      </div>
    </div>
  );
};

export default BetPage;

