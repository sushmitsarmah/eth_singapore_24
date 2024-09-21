// /* eslint-disable @typescript-eslint/no-unused-vars */
// // /* eslint-disable @typescript-eslint/no-explicit-any */
// // "use client";

// // import { useState } from "react";
// // import Navbar from "@/components/Navbar";
// // import Slider from "@/components/slider";
// // import { motion, AnimatePresence } from "framer-motion";

// // const categoriesData = [
// //   {
// //     name: "Crypto Prices",
// //     questions: [
// //       "Will BTC price hit 60K $ by the end of this year?",
// //       "Will ETH reach $5K in the next 6 months?",
// //       "Will SOL rise by 100% after the upcoming network upgrade?",
// //       "Will ADA surpass $15 by Q3?",
// //       "Will Dogecoin triple in value after the next major Elon Musk tweet?",
// //       "Will XRP cross $1 after winning the SEC lawsuit?",
// //       "Will the market cap of stablecoins increase by 20% in the next quarter?",
// //     ],
// //     deadline: "31st Dec 2024",
// //     totalPool: "$500,000",
// //   },
// //   {
// //     name: "ETHGlobal Singapore",
// //     questions: [
// //       "Will Project Alpha win the top prize at ETHGlobal Singapore?",
// //       "Will over 70% of projects at ETHGlobal focus on DeFi solutions?",
// //       "Will the event introduce at least one breakthrough NFT project?",
// //       "Will the majority of ETHGlobal teams focus on Layer 2 scalability?",
// //       "Will an AI-driven blockchain project win a major prize?",
// //       "Will more than 30% of projects integrate zk-rollup technology?",
// //       "Will decentralized storage projects gain a major spotlight at the event?",
// //     ],
// //     deadline: "15th Jan 2024",
// //     totalPool: "$350,000",
// //   },
// //   {
// //     name: "Sports (Cricket)",
// //     questions: [
// //       "Will India win the upcoming ICC World Cup?",
// //       "Will Virat Kohli score more than 500 runs in the tournament?",
// //       "Will Australia win at least 3 out of their next 5 ODI matches?",
// //       "Will Pakistan's fast bowlers take the most wickets in the upcoming series?",
// //       "Will the highest score in the next IPL season be above 250 runs?",
// //       "Will any player score a double century in the next ODI World Cup?",
// //       "Will Afghanistan reach the semi-finals in the upcoming T20 World Cup?",
// //     ],
// //     deadline: "30th Nov 2023",
// //     totalPool: "$200,000",
// //   },
// //   {
// //     name: "AirDAO Top Category Prize",
// //     questions: [
// //       "Will Project XYZ win the AirDAO top category prize?",
// //       "Will more than 50% of projects at AirDAO focus on decentralized finance (DeFi)?",
// //       "Will any NFT project take home an AirDAO prize?",
// //       "Will a blockchain gaming project win a major prize at AirDAO?",
// //       "Will AirDAO introduce new incentives for developers during this event?",
// //       "Will AirDAO top prize winners include teams focused on social impact?",
// //       "Will any AI-powered decentralized apps be winners at AirDAO?",
// //     ],
// //     deadline: "12th Feb 2024",
// //     totalPool: "$150,000",
// //   },
// //   {
// //     name: "Upcoming US Elections",
// //     questions: [
// //       "Will the next US election see a higher voter turnout than the previous one?",
// //       "Will there be any major policy changes after the upcoming elections?",
// //       "Will the US dollar's value rise after the election results are announced?",
// //       "Will social media platforms play a bigger role in the next US election campaigns?",
// //       "Will there be a significant increase in early voting for the upcoming US elections?",
// //       "Will more than 3 swing states decide the outcome of the next US election?",
// //       "Will any tech or data-driven campaigns dominate the next US election?",
// //     ],
// //     deadline: "8th Nov 2024",
// //     totalPool: "$1,000,000",
// //   },
// // ];

// // const CategoryCompartment = ({ category }: any) => {
// //   const [isExpanded, setIsExpanded] = useState(false);
// //   const [answers, setAnswers] = useState(Array(category.questions.length).fill(""));

// //   const handleAnswerChange = (index: number, answer: string) => {
// //     const newAnswers = [...answers];
// //     newAnswers[index] = answer;
// //     setAnswers(newAnswers);
// //   };

// //   const handleSubmit = (e: any) => {
// //     e.preventDefault();
// //     console.log(`Category: ${category.name}`, answers);
// //     alert(`You have submitted your answers for ${category.name}`);
// //   };

// //   return (
// //     <motion.div
// //       className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg transition-all duration-500 p-4"
// //       whileHover={{ scale: 1.02 }}
// //     >
// //       <div className="flex justify-between items-center">
// //         <h3 className="text-3xl text-yellow-500 font-luckiest">{category.name}</h3>
// //         <motion.button
// //           className="text-white"
// //           onClick={() => setIsExpanded(!isExpanded)}
// //           animate={{ rotate: isExpanded ? 180 : 0 }}
// //           transition={{ duration: 0.3 }}
// //         >
// //           ▼
// //         </motion.button>
// //       </div>

// //       {/* Displaying deadline and total pool */}
// //       <div className="flex justify-between text-gray-400 mt-2 mb-4">
// //         <p className="text-lg">Deadline: <span className="text-white">{category.deadline}</span></p>
// //         <p className="text-lg">Total Pool: <span className="text-green-400">{category.totalPool}</span></p>
// //       </div>

// //       <AnimatePresence>
// //         {isExpanded && (
// //           <motion.div
// //             initial={{ height: 0, opacity: 0 }}
// //             animate={{ height: "auto", opacity: 1 }}
// //             exit={{ height: 0, opacity: 0 }}
// //             transition={{ duration: 0.4 }}
// //             className="overflow-hidden"
// //           >
// //             <form onSubmit={handleSubmit}>
// //               {category.questions.map((question: string, index: number) => (
// //                 <motion.div
// //                   key={index}
// //                   className="mb-6"
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ duration: 0.3, delay: index * 0.1 }}
// //                 >
// //                   <p className="text-lg font-luckiest text-gray-200">{index + 1}. {question}</p>
// //                   <div className="flex gap-4 mt-3">
// //                     <motion.button
// //                       type="button"
// //                       className={`px-5 py-3 rounded-lg font-bold text-lg transition ${
// //                         answers[index] === "Yes" ? "bg-green-500" : "bg-gray-700 hover:bg-green-600"
// //                       }`}
// //                       whileHover={{ scale: 1.1 }}
// //                       whileTap={{ scale: 0.95 }}
// //                       onClick={() => handleAnswerChange(index, "Yes")}
// //                     >
// //                       Yes
// //                     </motion.button>
// //                     <motion.button
// //                       type="button"
// //                       className={`px-5 py-3 rounded-lg font-bold text-lg transition ${
// //                         answers[index] === "No" ? "bg-red-500" : "bg-gray-700 hover:bg-red-600"
// //                       }`}
// //                       whileHover={{ scale: 1.1 }}
// //                       whileTap={{ scale: 0.95 }}
// //                       onClick={() => handleAnswerChange(index, "No")}
// //                     >
// //                       No
// //                     </motion.button>
// //                     <motion.button
// //                       type="button"
// //                       className={`px-5 py-3 rounded-lg font-bold text-lg transition ${
// //                         answers[index] === "Remains Same" ? "bg-yellow-500" : "bg-gray-700 hover:bg-yellow-600"
// //                       }`}
// //                       whileHover={{ scale: 1.1 }}
// //                       whileTap={{ scale: 0.95 }}
// //                       onClick={() => handleAnswerChange(index, "Remains Same")}
// //                     >
// //                       Remains Same
// //                     </motion.button>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //               <motion.button
// //                 type="submit"
// //                 className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-xl transition-all shadow-md"
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //               >
// //                 Submit
// //               </motion.button>
// //             </form>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </motion.div>
// //   );
// // };

// // const BetPage = () => {
// //   return (
// //     <div className="min-h-screen bg-gradient-to-r from-[#000000] via-[#202020] to-[#000000] text-white ">
// //       <Navbar />
// //       <div className="container mx-auto">
// //         <Slider />

// //         <h1 className="text-6xl mt-20 font-bold text-center font-luckiest text-green-500 mb-16">
// //           Categories
// //         </h1>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
// //           {categoriesData.map((category, index) => (
// //             <CategoryCompartment key={index} category={category} />
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BetPage;
// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// 'use client';

// import { useState, useEffect } from "react";
// import Image from 'next/image';
// import Navbar from "@/components/Navbar";
// import Slider from "@/components/slider";
// import { motion, AnimatePresence } from "framer-motion";
// import btcImage from "../../components/assets/coina.png"; // Example placeholder image
// import { Poppins } from 'next/font/google';

// // Google Font (Poppins)
// const poppins = Poppins({
//   weight: '400',
//   subsets: ['latin'],
//   display: 'swap',
// });

// // Example token data structure (30 tokens for round 1)
// const allTokens = [
//   { name: "BTC", question: "Will BTC cross 63k this week?" },
//   { name: "ETH", question: "Will ETH reach $4000?" },
//   { name: "SOL", question: "Will SOL rise by 20%?" },
//   { name: "ADA", question: "Will ADA go above $2?" },
//   { name: "DOGE", question: "Will DOGE triple its value?" },
//   { name: "XRP", question: "Will XRP reach $1?" },
//   { name: "BNB", question: "Will BNB reach $600 in the next 5 days?" },
//   { name: "AVAX", question: "Will AVAX rise by more than 25% this month?" },
//   { name: "DOT", question: "Will DOT cross $50 by the end of the quarter?" },
//   { name: "LTC", question: "Will LTC price exceed $200 in the next 30 days?" },
//   { name: "MATIC", question: "Will MATIC increase by 20% after its network upgrade?" },
//   { name: "LINK", question: "Will LINK hit $40 in the next two weeks?" },
//   { name: "FTM", question: "Will FTM jump by 15% in the next week?" },
//   { name: "UNI", question: "Will UNI cross $50 in the next month?" },
//   { name: "AAVE", question: "Will AAVE surpass $400 in the next two weeks?" },
//   { name: "SAND", question: "Will SAND's price double in the next 6 months?" },
//   { name: "AXS", question: "Will AXS increase by 20% in the next quarter?" },
//   { name: "ATOM", question: "Will ATOM rise to $50 before the end of the year?" },
//   { name: "ENJ", question: "Will ENJ cross $5 in the next two months?" },
// ];

// // Data structure for rounds
// const roundsData = [
//   {
//     round: 1,
//     deadline: "2 days remaining",
//     totalPool: "5k USDC",
//     level: "Easy"
//   },
//   {
//     round: 2,
//     deadline: "Locked",
//     totalPool: "Locked",
//     level: "Medium"
//   },
//   {
//     round: 3,
//     deadline: "Locked",
//     totalPool: "Locked",
//     level: "Hard"
//   }
// ];

// const BetPage = () => {
//   const [currentRound, setCurrentRound] = useState(1);
//   const [selectedTokens, setSelectedTokens] = useState<string[]>([]);
//   const [roundExpanded, setRoundExpanded] = useState([true, false, false]); // Controls round dropdown state
//   const [searchTerm, setSearchTerm] = useState<string>(""); // Search bar state
//   const [expandedToken, setExpandedToken] = useState<string | null>(null); // For expanding token question

//   // Handles token selection (10 max)
//   const handleTokenSelect = (token: string) => {
//     if (selectedTokens.includes(token)) {
//       setSelectedTokens(selectedTokens.filter((t) => t !== token)); // Deselect token
//     } else if (selectedTokens.length < 10) {
//       setSelectedTokens([...selectedTokens, token]); // Select token if less than 10
//     }
//   };

//   // Expands the token when clicked
//   const toggleTokenExpand = (token: string) => {
//     if (expandedToken === token) {
//       setExpandedToken(null); // Collapse if it's already expanded
//     } else {
//       setExpandedToken(token); // Expand the clicked token
//     }
//   };

//   // Filters tokens based on search term
//   const filteredTokens = allTokens.filter(token =>
//     token.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className={`min-h-screen bg-gradient-to-r from-[#000000] via-[#202020] to-[#000000] text-white ${poppins.className}`}>
//       <Navbar />
//       <div className="container mx-auto">
//         <Slider />

//         <h1 className="text-6xl mt-20 font-bold text-center font-luckiest text-green-500 mb-16">
          
//         </h1>

//         {/* Render rounds */}
//         <div className="space-y-10">
//           {/* Round 1 - Active */}
//           <motion.div
//             className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg border border-gray-700 p-6`}
//           >
//             <h3 className="text-3xl text-yellow-500 mb-4 font-luckiest">Round 1 (Active)</h3>
//             <div className="flex justify-between items-center mb-6">
//               <p className="text-lg">Deadline: <span className="text-red">2 days remaining</span></p>
//               <p className="text-lg">Total Pool: <span className="text-green-400">5k USDC</span></p>
//             </div>

//             {/* Search Bar */}
//             <div className="mb-4">
//               <input
//                 type="text"
//                 className="w-full p-3 rounded-lg text-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
//                 placeholder="Search for a token..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>

//             {/* Token List */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredTokens.map((token, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-gray-800 p-4 rounded-xl shadow-md text-center cursor-pointer"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                   onClick={() => toggleTokenExpand(token.name)}
//                 >
//                   <div className="flex items-center space-x-4">
//                     <Image src={btcImage} alt="BTC" width={55} height={55} />
//                     <p className="text-lg text-gray-200">{token.name}</p>
//                   </div>
//                   {expandedToken === token.name && (
//                     <motion.div
//                       className="mt-4"
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <p className="text-gray-200 mb-4">{token.question}</p>
//                       <div className="flex gap-4 justify-center">
//                         <button
//                           type="button"
//                           className={`px-5 py-3 rounded-lg font-bold text-lg transition-all shadow-md ${
//                             selectedTokens.includes(token.name) ? "bg-green-600 border-4 border-green-400" : "bg-gray-700 hover:bg-green-600"
//                           }`}
//                           onClick={() => handleTokenSelect(token.name)}
//                         >
//                           Yes
//                         </button>
//                         <button
//                           type="button"
//                           className={`px-5 py-3 rounded-lg font-bold text-lg transition-all shadow-md ${
//                             selectedTokens.includes(token.name) ? "bg-red-600 border-4 border-red-400" : "bg-gray-700 hover:bg-red-600"
//                           }`}
//                           onClick={() => handleTokenSelect(token.name)}
//                         >
//                           No
//                         </button>
//                       </div>
//                     </motion.div>
//                   )}
//                 </motion.div>
//               ))}
//             </div>

//             <p className="text-lg mt-4 text-gray-400">
//               Selected Tokens: {selectedTokens.length} / 10
//             </p>

//             <button
//               type="submit"
//               className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold text-xl transition-all shadow-md transform hover:scale-105"
//             >
//               Submit Round 1 Predictions
//             </button>
//           </motion.div>

//           {/* Round 2 & Round 3 (Locked with dropdowns) */}
//           {roundsData.slice(1).map((round, index) => (
//             <motion.div
//               key={index + 1}
//               className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg border border-gray-700 p-6"
//             >
//               <div className="flex justify-between items-center">
//                 <h3 className="text-3xl text-yellow-500">Round {index + 2} ({round.level})</h3>
//                 <p className="text-lg text-gray-400">Deadline: {round.deadline}</p>
//                 <p className="text-lg text-gray-400">Total Pool: {round.totalPool}</p>
//               </div>
//               <p className="text-gray-400 mt-4">This round is locked. Complete Round 1 to proceed.</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BetPage;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState, useEffect } from "react";
import Image from 'next/image';
import Navbar from "@/components/Navbar";
import Slider from "@/components/slider";
import { motion, AnimatePresence } from "framer-motion";
import coinImage from '../../components/assets/coina.png';
import { EvmPriceServiceConnection } from "@pythnetwork/pyth-evm-js";

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
  { name: "BTC", question: "Will BTC be between 60k and 62k this week?" },
  { name: "ETH", question: "Will ETH remain between $3900 and $4100?" },
  { name: "SOL", question: "Will SOL price fluctuate between $150 and $180?" },
  { name: "ADA", question: "Will ADA price stay between $1.50 and $2?" },
  { name: "DOGE", question: "Will DOGE remain within 0.2 - 0.3 USD?" },
  { name: "XRP", question: "Will XRP remain between $0.90 and $1.10?" },
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
  const [selectedTokens, setSelectedTokens] = useState<string[]>([]);
  const [expandedToken, setExpandedToken] = useState<string | null>(null); // For expanding token question

  // Handles token selection (10 max)
  const handleTokenSelect = (token: string) => {
    if (selectedTokens.includes(token)) {
      setSelectedTokens(selectedTokens.filter((t) => t !== token)); // Deselect token
    } else if (selectedTokens.length < 10) {
      setSelectedTokens([...selectedTokens, token]); // Select token if less than 10
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#000000] via-[#202020] to-[#000000] text-white">
      <Navbar />
      <div className="container mx-auto mt-5">
        <Slider />

        <h1 className="text-6xl mt-20 font-bold text-center text-green-500 mb-16">
          Token Price Betting Tournament
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
              selectedTokens.includes(token.name)
                ? "bg-green-600 border-4 border-green-400"
                : "bg-gray-700 text-white hover:bg-green-600"
            }`}
            onClick={() => handleTokenSelect(token.name)}
          >
            Yes
          </button>
          <button
            type="button"
            className={`px-6 py-3 rounded-lg font-bold text-lg transition-all shadow-md ${
              selectedTokens.includes(token.name)
                ? "bg-red-600 border-4 border-red-400"
                : "bg-gray-700 text-white hover:bg-red-600"
            }`}
            onClick={() => handleTokenSelect(token.name)}
          >
            No
          </button>
        </div>
      </motion.div>
    ))}
  </div>
  <p className="text-lg mt-4 text-gray-400 font-luckiest">
    Selected Tokens: {selectedTokens.length} / 10
  </p>

  <button
    type="submit"
    className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold text-xl transition-all shadow-md transform hover:scale-105 font-luckiest"
  >
    Submit Round 1 Predictions
  </button>
</motion.div>

          {/* Round 2 & Round 3 - Locked */}
          {roundsData.slice(1).map((round, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg shadow-yellow-500 border border-gray-700 p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl text-yellow-500">Round {index + 2} ({round.level})</h3>
                <p className="text-lg text-gray-400">Deadline: {round.deadline}</p>
                <p className="text-lg text-gray-400">Total Pool: {round.totalPool}</p>
              </div>
              <p className="text-gray-400">This round is locked. Complete Round 1 to proceed.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BetPage;
