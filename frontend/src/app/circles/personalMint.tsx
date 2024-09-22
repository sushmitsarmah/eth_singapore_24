import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface PersonalMintProps {
  avatarInfo: {
    personalMint: () => Promise<void>;
    getTotalBalance: (address: string) => Promise<number>;
  };
  circlesAddress: string;
}

const PersonalMintComponent: React.FC<PersonalMintProps> = ({ avatarInfo, circlesAddress }) => {
  const [totalBalance, setTotalBalance] = useState(0);

  const personalMint = async () => {
    try {
      if (!avatarInfo) {
        throw new Error("Avatar not found");
      }

      await avatarInfo.personalMint();

      // Update total balance after minting
      const totalBalance = await avatarInfo.getTotalBalance(circlesAddress);
      setTotalBalance(totalBalance);

      return { success: true, message: "Personal minting successful" };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error minting Circles: ${error.message}`);
      } else {
        throw new Error("Error minting Circles: An unknown error occurred");
      }
    }
  };
  return (
    <Button
      onClick={personalMint}
      className="mt-2 bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
    >
      Mint Circles
    </Button>
  );
};
export default PersonalMintComponent;
