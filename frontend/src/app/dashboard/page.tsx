/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Slider from "@/components/slider";
import { motion, AnimatePresence } from "framer-motion";

const categoriesData = [
  {
    name: "Crypto Prices",
    questions: [
      "Will BTC price hit 60K $ by the end of this year?",
      "Will ETH reach $5K in the next 6 months?",
      "Will SOL rise by 100% after the upcoming network upgrade?",
      "Will ADA surpass $15 by Q3?",
      "Will Dogecoin triple in value after the next major Elon Musk tweet?",
      "Will XRP cross $1 after winning the SEC lawsuit?",
      "Will the market cap of stablecoins increase by 20% in the next quarter?",
    ],
    deadline: "31st Dec 2024",
    totalPool: "$500,000",
  },
  {
    name: "ETHGlobal Singapore",
    questions: [
      "Will Project Alpha win the top prize at ETHGlobal Singapore?",
      "Will over 70% of projects at ETHGlobal focus on DeFi solutions?",
      "Will the event introduce at least one breakthrough NFT project?",
      "Will the majority of ETHGlobal teams focus on Layer 2 scalability?",
      "Will an AI-driven blockchain project win a major prize?",
      "Will more than 30% of projects integrate zk-rollup technology?",
      "Will decentralized storage projects gain a major spotlight at the event?",
    ],
    deadline: "15th Jan 2024",
    totalPool: "$350,000",
  },
  {
    name: "Sports (Cricket)",
    questions: [
      "Will India win the upcoming ICC World Cup?",
      "Will Virat Kohli score more than 500 runs in the tournament?",
      "Will Australia win at least 3 out of their next 5 ODI matches?",
      "Will Pakistan's fast bowlers take the most wickets in the upcoming series?",
      "Will the highest score in the next IPL season be above 250 runs?",
      "Will any player score a double century in the next ODI World Cup?",
      "Will Afghanistan reach the semi-finals in the upcoming T20 World Cup?",
    ],
    deadline: "30th Nov 2023",
    totalPool: "$200,000",
  },
  {
    name: "AirDAO Top Category Prize",
    questions: [
      "Will Project XYZ win the AirDAO top category prize?",
      "Will more than 50% of projects at AirDAO focus on decentralized finance (DeFi)?",
      "Will any NFT project take home an AirDAO prize?",
      "Will a blockchain gaming project win a major prize at AirDAO?",
      "Will AirDAO introduce new incentives for developers during this event?",
      "Will AirDAO top prize winners include teams focused on social impact?",
      "Will any AI-powered decentralized apps be winners at AirDAO?",
    ],
    deadline: "12th Feb 2024",
    totalPool: "$150,000",
  },
  {
    name: "Upcoming US Elections",
    questions: [
      "Will the next US election see a higher voter turnout than the previous one?",
      "Will there be any major policy changes after the upcoming elections?",
      "Will the US dollar's value rise after the election results are announced?",
      "Will social media platforms play a bigger role in the next US election campaigns?",
      "Will there be a significant increase in early voting for the upcoming US elections?",
      "Will more than 3 swing states decide the outcome of the next US election?",
      "Will any tech or data-driven campaigns dominate the next US election?",
    ],
    deadline: "8th Nov 2024",
    totalPool: "$1,000,000",
  },
];

const CategoryCompartment = ({ category }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [answers, setAnswers] = useState(Array(category.questions.length).fill(""));

  const handleAnswerChange = (index: number, answer: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(`Category: ${category.name}`, answers);
    alert(`You have submitted your answers for ${category.name}`);
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg transition-all duration-500 p-4"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-3xl text-yellow-500 font-luckiest">{category.name}</h3>
        <motion.button
          className="text-white"
          onClick={() => setIsExpanded(!isExpanded)}
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.button>
      </div>

      {/* Displaying deadline and total pool */}
      <div className="flex justify-between text-gray-400 mt-2 mb-4">
        <p className="text-lg">Deadline: <span className="text-white">{category.deadline}</span></p>
        <p className="text-lg">Total Pool: <span className="text-green-400">{category.totalPool}</span></p>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <form onSubmit={handleSubmit}>
              {category.questions.map((question: string, index: number) => (
                <motion.div
                  key={index}
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <p className="text-lg font-luckiest text-gray-200">{index + 1}. {question}</p>
                  <div className="flex gap-4 mt-3">
                    <motion.button
                      type="button"
                      className={`px-5 py-3 rounded-lg font-bold text-lg transition ${
                        answers[index] === "Yes" ? "bg-green-500" : "bg-gray-700 hover:bg-green-600"
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAnswerChange(index, "Yes")}
                    >
                      Yes
                    </motion.button>
                    <motion.button
                      type="button"
                      className={`px-5 py-3 rounded-lg font-bold text-lg transition ${
                        answers[index] === "No" ? "bg-red-500" : "bg-gray-700 hover:bg-red-600"
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAnswerChange(index, "No")}
                    >
                      No
                    </motion.button>
                    <motion.button
                      type="button"
                      className={`px-5 py-3 rounded-lg font-bold text-lg transition ${
                        answers[index] === "Remains Same" ? "bg-yellow-500" : "bg-gray-700 hover:bg-yellow-600"
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAnswerChange(index, "Remains Same")}
                    >
                      Remains Same
                    </motion.button>
                  </div>
                </motion.div>
              ))}
              <motion.button
                type="submit"
                className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-xl transition-all shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const BetPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#000000] via-[#202020] to-[#000000] text-white ">
      <Navbar />
      <div className="container mx-auto">
        <Slider />

        <h1 className="text-6xl mt-20 font-bold text-center font-luckiest text-green-500 mb-16">
          Categories
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {categoriesData.map((category, index) => (
            <CategoryCompartment key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BetPage;
