import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const INITIAL_SUPPLY: bigint = 1_000_000_000n;

const MoraqModule = buildModule("MoraqModule", (m) => {
    const maxRounds = 3;
    const roundQuestions = 6;

  const moraq = m.contract("Moraq", [maxRounds, roundQuestions]);

  return { moraq };
});

export default MoraqModule;