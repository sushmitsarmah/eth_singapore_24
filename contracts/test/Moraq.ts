import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";


describe("Moraq", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();
    const maxRounds = 3;
    const roundQs = 3;

    const Moraq = await hre.ethers.getContractFactory("Moraq");
    const moraq = await Moraq.deploy(maxRounds, roundQs, {});

    return { moraq, maxRounds, roundQs, owner, otherAccount };
  }

   describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { moraq, owner } = await loadFixture(deployFixture);

      expect(await moraq.owner()).to.equal(owner.address);
    });

    it("should have initial round id as 0", async function() {
      const { moraq } = await loadFixture(deployFixture);
      expect(await moraq.getRoundId()).to.equal(0);
    });

    it("should start a new round", async function() {
      const { moraq } = await loadFixture(deployFixture);
      await moraq.startNewRound();
      expect(await moraq.getRoundId()).to.equal(0);
      expect(await moraq.getCurrentRoundStartTime()).to.be.gt(0);
      expect(await moraq.getCurrentRoundEndTime()).to.be.gt(0);
      expect((await moraq.getCurrentRoundQuestionIds()).length).to.equal(0);
    });

    it("Should create a question", async function () {
      const { moraq } = await loadFixture(deployFixture);
      await moraq.startNewRound();
      const roundId = await moraq.getRoundId();
      const pythContractAdd = "0x4305fb66699c3b2702d4d05cf36551390a4c69c6"
      const pythUsdPriceId = "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace"
      await moraq.createQuestion(roundId, "BTC", 64000, pythContractAdd, pythUsdPriceId);
      expect((await moraq.getCurrentRoundQuestionIds()).length).to.equal(1);
    });
  }); 
});