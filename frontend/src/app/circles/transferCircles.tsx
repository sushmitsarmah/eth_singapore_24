/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { validateRecipient } from '../../utils/validateRecipent';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SendCirclesProps {
  avatarInfo: any;
  recipient: string;
  updateBalance: () => void;
}

const SendCircles: React.FC<SendCirclesProps> = ({ avatarInfo, recipient, updateBalance }) => {
  const [valueString, setValueString] = useState<string>("");

  const send = async () => {
    try {
      if (!avatarInfo) {
        throw new Error("Avatar not found");
      }

      const value = parseFloat(valueString);
      if (isNaN(value) || value <= 0) {
        throw new Error("Invalid value");
      }

      if (!validateRecipient(recipient)) {
        throw new Error("Invalid recipient address");
      }

      await avatarInfo.transfer(recipient, value);
      updateBalance();
    } catch (error) {
      console.error("Error sending CRC tokens:", error);
    }
  };

  return (
    <div className="space-y-4">
      <div className="mb-4">
        <Label htmlFor="amount">Amount to Send</Label>
        <Input
          id="amount"
          type="number"
          placeholder="Enter amount to send"
          value={valueString}
          onChange={(e) => setValueString(e.target.value)}
          className="w-full"
        />
      </div>
      <Button
        onClick={send}
        disabled={parseFloat(valueString) <= 0}
        className="w-full bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded"
      >
        Send CRC
      </Button>
    </div>
  );
};

export default SendCircles;
