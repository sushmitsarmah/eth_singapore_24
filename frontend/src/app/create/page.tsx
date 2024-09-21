/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
// pages/CreateBet.js
'use client'
'use client'
import { useState } from 'react';
import router from 'next/router';
import { BsArrowRight } from 'react-icons/bs';
import Navbar from '@/components/Navbar';

const CreateBet = () => {
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  // const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const betData = {
      category,
      question,
      betId: Math.floor(Math.random() * 100000), // Random ID for the bet
    };
    console.log("Bet submitted:", betData);
    router.push("/mybets");
  };

  return (
    <div className="h-screen bg-gradient-to-r from-[#000000] via-[#202020] to-[#000000] relative overflow-hidden">
      <Navbar />
      <div className="grid mb-0 pt-5 pb-5 mt-0 md:grid-cols-2">
        <figure className="flex flex-col pt-10">
          <div className="text-left align-left w-[750px] p-8 pl-[100px]">
            <div className="mb-2 bg-gradient-to-r from-[#fff] via-[#fff]/80 to-[#9d9ea1]/50 bg-clip-text text-transparent font-bold font-Agda text-[80px] uppercase max-w-[575px]">
              Create Your Question
            </div>
            <p className='text-white pb-10'>
              Select a category and type the question you'd like to bet on.
            </p>
          </div>
        </figure>

        <figure className="flex flex-col items-center justify-center pt-10 pr-20">
          <div className="text-center px-[50px] w-[650px] p-8 bg-[#202020] rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col text-left mb-6">
                <label htmlFor="category" className="text-lg font-medium text-white">Select Question Category</label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-purple-500 block w-full p-2.5"
                  required
                >
                  <option value="">--Select Category--</option>
                  <option value="crypto">Cryptocurrency</option>
                  <option value="sports">Sports</option>
                  <option value="esports">Esports</option>
                  <option value="general">General Knowledge</option>
                </select>
              </div>

              <div className="flex flex-col text-left mb-6">
                <label htmlFor="question" className="text-lg font-medium text-white">Enter Your Question</label>
                <input
                  type="text"
                  id="question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-purple-500 block w-full p-2.5"
                  placeholder="Will Bitcoin hit $70k?"
                  required
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center text-lg px-8 py-3 bg-[#98ee2c] uppercase font-bold text-black hover:bg-[#f0f0f0] transition cursor-pointer rounded-full"
              >
                Submit Question <BsArrowRight className='ml-2' />
              </button>
            </form>
          </div>
        </figure>
      </div>

      {/* Prize Note Section */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-[#1a1a1a] bg-opacity-90 text-white p-6 rounded-lg shadow-lg text-center max-w-[600px]">
        <p className="text-lg font-semibold">
          Please Note : The most interesting questions selected will win a prize of <span className="text-[#98ee2c]">$500 USDC</span>!
        </p>
      </div>
    </div>
  );
};

export default CreateBet;
