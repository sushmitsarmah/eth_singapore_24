/* eslint-disable @typescript-eslint/no-explicit-any */
import { ethers } from 'ethers';
import abiFile from './abi/MoraqModule#Moraq.json';

const abi = abiFile.abi;
const contractAddress = '0xD64e0acF9F20da407df2dA759F43DF7e7C0D6BDb';

// Initialize provider and contract
let provider: ethers.BrowserProvider;
let contract: ethers.Contract;

// Initialize the provider and contract
const initializeContract = async (ethereum: any) => {
  provider = new ethers.BrowserProvider(ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = await provider.getSigner();
  contract = new ethers.Contract(contractAddress, abi, signer);
};

// Helper function to execute transactions
const executeTransaction = async (ethereum: any, method: string, ...args: any[]) => {
  if (!contract) await initializeContract(ethereum);
  const tx = await contract[method](...args);
  await tx.wait();
};

// Helper function to call view functions
const callViewFunction = async (ethereum: any, method: string, ...args: any[]): Promise<any> => {
  if (!contract) await initializeContract(ethereum);
  return await contract[method](...args);
};

export const answerQuestion = (roundId: string, questionId: number, answer: boolean, stake: ethers.BigNumberish) =>
  executeTransaction('answerQuestion', roundId, questionId, answer, { value: stake });

export const createQuestion = (roundId: string, questionId: number, coinId: string, targetPrice: number, pythContract: string, usdPriceId: string) =>
  executeTransaction('createQuestion', roundId, questionId, coinId, targetPrice, pythContract, usdPriceId);

export const currentRoundId = (ethereum: any): Promise<number> =>
  callViewFunction(ethereum, 'currentRoundId');

export const declareWinners = (ethereum: any, roundId: string) =>
  executeTransaction(ethereum, 'declareWinners', roundId);

export const fetchPrices = (ethereum: any, roundId: string) =>
  executeTransaction(ethereum, 'fetchPrices', roundId);

export const getQuestion = (ethereum: any, roundId: string, questionId: number) =>
  callViewFunction(ethereum, 'getQuestion', roundId, questionId);

export const getRoundId = (ethereum: any): Promise<number> =>
  callViewFunction(ethereum, 'getRoundId');

export const getRoundUserAnswers = (ethereum: any, roundId: string, user: string) =>
  callViewFunction(ethereum, 'getRoundUserAnswers', roundId, user);

export const maxRounds = (ethereum: any): Promise<number> =>
  callViewFunction(ethereum, 'maxRounds');

export const owner = (ethereum: any): Promise<string> =>
  callViewFunction(ethereum, 'owner');

export const proceedToNextRound = (ethereum: any) =>
  executeTransaction(ethereum, 'proceedToNextRound');

export const roundQuestions = (ethereum: any): Promise<number> =>
  callViewFunction(ethereum, 'roundQuestions');

export const rounds = (ethereum: any, roundId: number) =>
  callViewFunction(ethereum, 'rounds', roundId);

export const startNewRound = (ethereum: any) =>
  executeTransaction(ethereum, 'startNewRound');

export const userWinnings = (ethereum: any, user: string): Promise<number> =>
  callViewFunction(ethereum, 'userWinnings', user);

export const withdrawWinnings = (ethereum: any) =>
  executeTransaction(ethereum, 'withdrawWinnings');