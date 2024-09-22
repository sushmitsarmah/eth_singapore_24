"use client";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import CirclesSDKContext from "../../context/CirclesSdk";
import ManageTrustAndUntrust from './ManageTrust'
import SendCircles from "./transferCircles";
import PersonalMintComponent from './personalMint';
import RecipientValidator from './recipientValidators'
import TrustRelations from "./trustRelations";

import { ethers } from "ethers";

export default function CirclesOnboarding() {
  const {
    sdk,
    setIsConnected,
    isConnected,
    adapter,
    circlesProvider,
    circlesAddress,
    initSdk,
  } = useContext(CirclesSDKContext);
  const [avatarInfo, setAvatar] = useState(null);
  const [userBalance, setUserBalance] = useState(0);
  const [mintableAmount, setMintableAmount] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  const [recipient, setRecipient] = useState("");
  const [recipientIsValid, setRecipientIsValid] = useState(false);
  const [trustedCircles, setTrustedCircles] = useState([]);
  const [untrustedCircles, setUntrustedCircles] = useState([]);
  const [mappedRelations, setTrustRelations] = useState([]);
  const navigate = useNavigate();

  // Connect Wallet Function
  const connectWallet = async () => {
    try {
      await initSdk();
      await fetchUserBalance();
      setIsConnected(true);

      // Perform avatar check only after connection is established
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  useEffect(() => {
    if (isConnected && sdk && circlesAddress) {
      handleAvatarCheck(); // Check avatar when connection status, SDK, or address changes
      fetchUserBalance(); // Fetch the user balance when connected
    }
  }, [isConnected, sdk, circlesAddress]);

  const disconnectWallet = () => {
    setIsConnected(false);
    setUserAddress("");
    setUserBalance(0);
    setAvatar(null);
  };

  const fetchUserBalance = async () => {
    if (circlesAddress && circlesProvider) {
      try {
        // Fetch the balance for the circlesAddress
        const userBalance = await circlesProvider.getBalance(circlesAddress);
        setUserBalance(Number(ethers.formatEther(userBalance)));
      } catch (error) {
        console.error("Error fetching user balance:", error);
      }
    }
  };

  const handleAvatarCheck = async () => {
    try {
      if (!sdk) {
        throw new Error("SDK is not available");
      }

      if (!circlesAddress) {
        throw new Error("Circles address is not available");
      }

      // Check if the avatar exists for the current address
      const avatarInfo = await sdk.getAvatar(circlesAddress);

      if (avatarInfo) {
        setAvatar(avatarInfo);

        const mintableAmount = await avatarInfo.getMintableAmount(
          circlesAddress
        );
        setMintableAmount(mintableAmount);
        updateBalance();
      } else {
        // No existing avatar, register a new one
        console.log("Avatar not found, registering as human...");
        await handleRegisterAvatar(); // Call the registration function
      }
    } catch (error) {
      console.error("Error in handleAvatarCheck:", error);
    }
  };

  const handleRegisterAvatar = async () => {
    try {
      const newAvatar = await sdk.registerHuman();
      console.log("Registered as V1 Human:", newAvatar);
      setAvatar(newAvatar);
    } catch (registerError) {
      console.error("Error registering avatar:", registerError);
    }
  };

  const handleNavigateToDashboard = () => {
    navigate("/dashboard", { state: { trustRelations: mappedRelations } });
  };

  async function updateBalance() {
    if (avatarInfo) {
      const totalBalance = await avatarInfo.getTotalBalance(circlesAddress);
      setTotalBalance(totalBalance);
    }
    setTotalBalance(totalBalance);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-6xl bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <header className="bg-gray-950 text-white px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            Welcome to Circles Dev Playground
          </h1>
          {isConnected && (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-6">
                <div className="text-sm font-medium">
                  User Balance : {Number(userBalance).toFixed(4)} XDAI
                </div>
                <Button
                  onClick={disconnectWallet}
                  className="bg-red-700 hover:bg-red-600 text-white font-bold py-4 px-2 rounded"
                >
                  Disconnect Wallet
                </Button>
                <Button
                  onClick={handleNavigateToDashboard}
                  className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-4 px-2 rounded"
                >
                  Dashboard
                </Button>
              </div>
            </div>
          )}
        </header>
        <main className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {!isConnected ? (
            <div className="flex items-center justify-center md:col-span-2">
              <Button
                onClick={connectWallet}
                className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded"
              >
                Connect Wallet
              </Button>
            </div>
          ) : (
            <>
              <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">
                  Send Circles CRC Token
                </h2>
                <div className="space-y-4">
                  <RecipientValidator
                    recipient={recipient}
                    setRecipientIsValid={setRecipientIsValid}
                    recipientIsValid={recipientIsValid}
                    setRecipient={setRecipient}
                  />
                  <SendCircles
                    avatarInfo={avatarInfo}
                    recipient={recipient}
                    updateBalance={updateBalance}
                  />
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-6">Circles Avatar Info</h2>
                <div className="flex items-center gap-4">
                  {avatarInfo?.image ? (
                    <img
                      src={avatarInfo.image}
                      alt="Avatar"
                      className="w-12 h-12 rounded-full"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <UserIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                    </div>
                  )}
                  <div>
                    <Label className="block text-sm font-medium">
                      Address: {avatarInfo?.address}
                    </Label>
                    <Label className="block text-sm font-medium">
                      Total Balance: {totalBalance}
                    </Label>
                    {avatarInfo ? (
                      <PersonalMintComponent />
                    ) : (
                      <Button
                        onClick={handleRegisterAvatar}
                        className="mt-2 bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded"
                      >
                        Get your Circles Avatar
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg h-full md:col-span-2">
                <h2 className="text-xl font-bold mb-4">
                  Trust new circles avatar
                </h2>
                <ManageTrustAndUntrust
                  avatarInfo={avatarInfo}
                  trustedCircles={trustedCircles}
                  setTrustedCircles={setTrustedCircles}
                  untrustedCircles={untrustedCircles}
                  setUntrustedCircles={setUntrustedCircles}
                />
                <TrustRelations
                  avatarInfo={avatarInfo}
                  setTrustedCircles={setTrustedCircles}
                  setTrustRelations={setTrustRelations}
                />
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

function UserIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function setUserAddress(arg0: string) {
    throw new Error("Function not implemented.");
}

