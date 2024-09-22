import React from "react";
import { validateRecipient } from "../../utils/validateRecipent";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface RecipientValidatorProps {
  recipient: string;
  setRecipient: (recipient: string) => void;
  recipientIsValid: boolean;
  setRecipientIsValid: (isValid: boolean) => void;
}

const RecipientValidator: React.FC<RecipientValidatorProps> = ({
  recipient,
  setRecipient,
  recipientIsValid,
  setRecipientIsValid,
}) => {
  const handleValidateRecipient = () => {
    const isValid = validateRecipient(recipient);
    setRecipientIsValid(isValid);
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="recipient">Recipient Address</Label>
      <Input
        id="recipient"
        type="text"
        placeholder="Enter recipient address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        onBlur={handleValidateRecipient}
      />
      {!recipientIsValid && (
        <p className="text-red-500">Please enter a valid recipient address</p>
      )}
    </div>
  );
};

export default RecipientValidator;
