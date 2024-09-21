/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import FlappyBird from "./FlappyBird";
import React from "react";

const scorers = [
    { address: "0x293492839fksjfhksddfg8948934", score: 10 },
    { address: "0x293sddfg8948934jkjdklfglio23", score: 6 },
    { address: "0x12cdff434fksjfhksddfg8948934", score: 4 },
    { address: "0x198763839fksjfhksddfg8948934", score: 3 },
    { address: "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p", score: 8 },
    { address: "0x123abc456def789ghi012jkl345mno678", score: 12 },
    { address: "0xabcdef1234567890abcdef1234567890", score: 7 },
  ];
  
export default function Game() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white p-18 flex justify-center items-center gap-10">
      {/* FlappyBird Game Section */}
      <div className="flex flex-col w-full lg:w-1/3 justify-center items-center">
      <h3 className="font-extrabold text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-8">Play Now , Win Big </h3>
        <div className="w-[400px] max-w-xl h-[600px] bg-gray-800 p-10 rounded-lg shadow-2xl flex justify-center items-center">
          <FlappyBird />
        </div>
      </div>

      <div className="w-1/3 bg-gray-900 p-8 rounded-lg shadow-xl border border-gray-600">
        <h1 className="font-extrabold text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 mb-8">
          Flappy Bird LeaderBoard
        </h1>
        <div className="grid grid-cols-[4fr_1fr] gap-4 text-lg">
  {scorers.map((k, i) => (
    <React.Fragment key={i}>
      {/* Ethereum address - large column */}
      <div className="bg-gray-800 p-4 rounded-md font-mono text-gray-300 border border-gray-700 w-full">
        {k.address}
      </div>
      {/* Score - small column */}
      <div className="bg-gray-800 p-4 rounded-md font-bold text-right text-gray-300 border border-gray-700 w-24">
        {k.score}
      </div>
    </React.Fragment>
  ))}
</div>
</div>
</div>
  );
};