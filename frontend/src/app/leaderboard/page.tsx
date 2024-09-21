/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const leaderboardData = [
  { rank: 1, name: "CryptoKing", score: "2500 USDC", avatar: "/path-to-avatar1.png" },
  { rank: 2, name: "TokenMaster", score: "2300 USDC", avatar: "/path-to-avatar2.png" },
  { rank: 3, name: "BlockchainPro", score: "2200 USDC", avatar: "/path-to-avatar3.png" },
  { rank: 4, name: "DeFiGuru", score: "2100 USDC", avatar: "/path-to-avatar4.png" },
  { rank: 5, name: "SatoshiFan", score: "2000 USDC", avatar: "/path-to-avatar5.png" },
  { rank: 6, name: "AltCoinHero", score: "1950 USDC", avatar: "/path-to-avatar6.png" },
  { rank: 7, name: "ETHWhale", score: "1800 USDC", avatar: "/path-to-avatar7.png" },
  { rank: 8, name: "SolanaKing", score: "1700 USDC", avatar: "/path-to-avatar8.png" },
];

const LeaderboardPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white">
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="text-6xl font-luckiest text-center text-yellow-500 mb-12">Leaderboard</h1>

        {/* Leaderboard Table */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {leaderboardData.map((user, index) => (
            <motion.div
              key={user.rank}
              className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl shadow-lg shadow-yellow-500 p-6 flex items-center justify-between space-x-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-16 h-16 rounded-full border-2 border-yellow-500"
                />
                <div>
                  <p className="text-xl font-bold text-white">{user.name}</p>
                  <p className="text-gray-400">Rank #{user.rank}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-luckiest text-green-400">{user.score}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
