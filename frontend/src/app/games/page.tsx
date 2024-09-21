/* eslint-disable @typescript-eslint/no-unused-vars */
// pages/GamePage.js
'use client'
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Slider from '../../components/slider';
import Img from '../../components/assets/bird.png'; // Flappy Bird Image
import CrashBet from '../../components/crashbet'

// BetButton component to create a button with different bet amounts
const BetButton: React.FC<{ amount: number }> = ({ amount }) => (
  <button className="px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-full transition duration-300 transform hover:scale-110">
    ${amount}
  </button>
);

const vals = [
  {
    id: 1,
    img: Img.src,
    name: 'Flappy Bird',
    title: '',
    hosted_by: '',
    url: '/games/flappybird',
  },
];

const GamePage = () => {
  const [games] = useState([
    { name: 'Flappy Bird', description: 'Flap your way to victory while betting on your success.', image: Img },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <Navbar />
      <Slider />
      <div className="container mx-auto py-12">

        <h2 className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Available Games
        </h2>

        {/* Game Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {games.map((game, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-8 rounded-xl shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl duration-300"
            >
              <div className="relative w-full h-48 mb-6">
                <Image 
                  src={game.image} 
                  alt={game.name} 
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
              </div>
              <h3 className="text-3xl font-semibold mb-4 text-center">{game.name}</h3>
              <p className="text-lg text-gray-400 mb-6 text-center">{game.description}</p>

              {/* Betting buttons */}
              <div className="flex flex-wrap justify-around mt-4">
                <BetButton amount={10} />
                <BetButton amount={50} />
                <BetButton amount={100} />
                <BetButton amount={500} />
              </div>
            </div>
          ))}

          {/* Crash Bet Game Card */}
          <CrashBet />
        </div>
      </div>
    </div>
  );
};

export default GamePage;
