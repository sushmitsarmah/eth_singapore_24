/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */


"use client";
import { IDKitWidget, VerificationLevel } from "@worldcoin/idkit";
import Image from "next/image";
import { useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import btc from "../../components/assets/btc.png";
import { useRouter } from "next/navigation";
import Avatar from "../../components/assets/avatar.png";
import { useAppKit } from '@reown/appkit/react'
import Navbar from "../../components/Navbar";

const profile = () => {
  const router = useRouter();

  const { open, close } = useAppKit()
  // User data and bets
  const [userProfile, setUserProfile] = useState({
    username: "buddyharshal.eth", // ENS domain as the username
    avatar: "/images/avatar.png", // Avatar image
    stats: {
      matchesPlayed: 20,
      matchesWon: 12,
      matchesLost: 8,
    },
    ongoingBets: [
      {
        token: "ETH",
        currentPrice: 1650,
        betPrice: 1600,
        potentialWin: 500,
        image: "/images/eth-logo.png",
        round: 1,
        userPrediction: 1700,
        rangeMin: 1600,
        rangeMax: 1800,
      },
      {
        token: "BTC",
        currentPrice: 24000,
        betPrice: 23000,
        potentialWin: 300,
        image: "/images/btc-logo.png",
        round: 1,
        userPrediction: 25000,
        rangeMin: 22000,
        rangeMax: 26000,
      },
      {
        token: "Flow",
        currentPrice: 6.5,
        betPrice: 7.0,
        potentialWin: 250,
        image: "/images/apt-logo.png",
        round: 2,
        userPrediction: 7.5,
        rangeMin: 6.0,
        rangeMax: 8.0,
      },
    ],
    pastBets: [
      { token: "ETH", result: "Won", amountWon: 300 },
      { token: "BTC", result: "Lost", amountLost: 200 },
    ],
  });

  // Pie Chart Data
  const pieData = {
    labels: ['Matches Won', 'Matches Lost'],
    datasets: [
      {
        data: [userProfile.stats.matchesWon, userProfile.stats.matchesLost],
        backgroundColor: ['#22c55e', '#ef4444'],
        hoverBackgroundColor: ['#16a34a', '#dc2626'],
      },
    ],
  };
  

  const pieOptions = {
    maintainAspectRatio: false,
    responsive: true,
  };

  // World ID verification handling
  const verifyProof = async (proof: any) => {
    // Implement your server-side verification logic here
    console.log("Verifying proof:", proof);
  };

  const onSuccess = () => {
    console.log("World ID verification successful!");
  };

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen p-8">
      <Navbar />
      <div className="container mx-auto">
        {/* Profile Section */}
        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-700 via-purple-800 to-gray-800 rounded-lg shadow-lg mt-10 mb-10">
          <div className="flex items-center space-x-6">
            <Image src={Avatar} alt="Avatar" width={100} height={100} className="rounded-md" />
            <div>
              <h1 className="text-4xl font-bold text-white">{userProfile.username}</h1>
              <p className="text-gray-400">
                Wallet: 0x71F1101Bf020353Be958A85432DDC1c0DDCBFc58
              </p>
          </div>
          <div className="flex items-center space-x-4 mt-6">
          <input
            type="text"
            placeholder="Enter trusted address to make circles"
            className="w-80 px-4 py-3 text-lg text-gray-900 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            type="button"
            className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-6 py-3 rounded-md font-bold text-lg transition-all shadow-lg transform hover:scale-105"
          >
            Trust
          </button>
        </div>
        </div>
          <div className="flex items-center space-x-4">
            {/* World ID Verification Button */}
            <IDKitWidget
              app_id="app_staging_7bee8c3df1c3bfcdc08be0fec345d6db"
              action="verify-withdrawl"
              verification_level={VerificationLevel.Orb}
              handleVerify={verifyProof}
              onSuccess={onSuccess}
            >
              {({ open }) => (
                <button
                  className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 p-6 rounded-md hover:scale-105 transition"
                  onClick={open}
                >
                  Verify World ID 
                </button>
              )}
            </IDKitWidget>

            {/* Purchase Flow Button */}
            <button
              className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 p-6 rounded-md hover:scale-105 transition"
              onClick={() =>
                open({view:'OnRampProviders'})
              }
            >
              Purchase Flow
            </button>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div className="p-6 bg-gradient-to-r from-gray-700 via-gray-800 to-black rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-green-400">Analytics</h2>
          {/* Increased height to ensure chart renders */}
          <div className="h-96"> 
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Box 1: Total Matches Played */}
          <div className="bg-gradient-to-r from-gray-700 to-black p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-green-400 mb-4">Total Matches Played</h3>
            <p className="text-4xl font-bold text-green-500">
              {userProfile.stats.matchesPlayed}
            </p>
          </div>

          {/* Box 2: Matches Won */}
          <div className="bg-gradient-to-r from-gray-700 to-black p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-green-400 mb-4">Matches Won</h3>
            <p className="text-4xl font-bold text-green-500">
              {userProfile.stats.matchesWon}
            </p>
          </div>

          {/* Box 3: Matches Lost */}
          <div className="bg-gradient-to-r from-gray-700 to-black p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-red-400 mb-4">Matches Lost</h3>
            <p className="text-4xl font-bold text-red-500">
              {userProfile.stats.matchesLost}
            </p>
          </div>

          {/* Box 4: Potential Win */}
          <div className="bg-gradient-to-r from-gray-700 to-black p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Potential Win</h3>
            <p className="text-4xl font-bold text-yellow-500">
              $500
            </p>
          </div>

          {/* Box 5: Player Ranking */}
          <div className="bg-gradient-to-r from-gray-700 to-black p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Player Ranking</h3>
            <p className="text-4xl font-bold text-blue-500">
              #15
            </p>
          </div>

          {/* Box 6: Match Win Ratio */}
          <div className="bg-gradient-to-r from-gray-700 to-black p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Win Ratio</h3>
            <p className="text-4xl font-bold text-purple-500">
              60%
            </p>
          </div>
        </div>


        <div className="p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg mb-10">
  <h2 className="text-3xl font-semibold mb-6 text-yellow-300">Round 1: Earn for Fun (Active)</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {userProfile.ongoingBets
      .filter((bet) => bet.round === 1)
      .map((bet, index) => (
        <div
          key={index}
          className="bg-gray-800 p-4 rounded-lg shadow-md text-center hover:scale-105 transition"
        >
          <Image src={btc} alt={bet.token} width={50} height={50} className="mx-auto" />
          <h3 className="text-lg font-semibold mt-4 text-yellow-400">
            {bet.token} Price Bet
          </h3>
          <p className="text-gray-400 mt-2">Current Price: ${bet.currentPrice}</p>
          <p className="text-gray-400 mt-1">Bet Price: ${bet.betPrice}</p>
          <p className="text-green-400 mt-2 font-bold">Potential Win: ${bet.potentialWin}</p>
        </div>
      ))}
  </div>
</div>

{/* Round 2: Range Bets */}
<div className="p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg mb-10">
  <h2 className="text-3xl font-semibold mb-6 text-yellow-300">Round 2: Earn to Die (Starting soon)</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {userProfile.ongoingBets
      .filter((bet) => bet.round === 2)
      .map((bet, index) => (
        <div
          key={index}
          className="bg-gray-800 p-4 rounded-lg shadow-md text-center hover:scale-105 transition"
        >
          <Image src={btc} alt={bet.token} width={50} height={50} className="mx-auto" />
          <h3 className="text-lg font-semibold mt-4 text-yellow-400">
            {bet.token} Range Bet
          </h3>
          <p className="text-gray-400 mt-2">Current Range: ${bet.rangeMin} - ${bet.rangeMax}</p>
          <p className="text-gray-400 mt-1">Bet Range: $10k - $12k</p>
          <p className="text-green-400 mt-2 font-bold">Potential Win: ${bet.potentialWin}</p>
        </div>
      ))}
  </div>
</div>

{/* Round 3: User Input Bets */}
<div className="p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg mb-10">
  <h2 className="text-3xl font-semibold mb-6 text-yellow-300">Round 3: On the Moon round (Starting soon)</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {userProfile.ongoingBets
      .filter((bet) => bet.round === 3)
      .map((bet, index) => (
        <div
          key={index}
          className="bg-gray-800 p-4 rounded-lg shadow-md text-center hover:scale-105 transition"
        >
          <Image src={btc} alt={bet.token} width={50} height={50} className="mx-auto" />
          <h3 className="text-lg font-semibold mt-4 text-yellow-400">
            {bet.token} User Prediction Bet
          </h3>
          <p className="text-gray-400 mt-2">Your Prediction: ${bet.userPrediction}</p>
          <p className="text-gray-400 mt-1">Current Price: ${bet.currentPrice}</p>
          <p className="text-green-400 mt-2 font-bold">Potential Win: ${bet.potentialWin}</p>
        </div>
      ))}
  </div>
</div>

{/* Past Bets Section */}
<div className="p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg">
  <h2 className="text-3xl font-semibold mb-6 text-yellow-300">Past Bets (All Rounds)</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {userProfile.pastBets.map((bet, index) => (
      <div
        key={index}
        className="bg-gray-800 p-4 rounded-lg shadow-md text-center hover:scale-105 transition"
      >
        <Image src={btc} alt={bet.token} width={50} height={50} className="mx-auto" />
        <h3 className="text-lg font-semibold text-yellow-400 mt-2">{bet.token} Price Bet</h3>
        <p className="text-gray-400 mt-2">Result: {bet.result}</p>
        <p className="text-green-400 mt-2 font-bold">
          {bet.result === 'Won' ? `Amount Won: $${bet.amountWon}` : `Amount Lost: $${bet.amountLost}`}
        </p>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
    </div>
  );
};

export default profile;
