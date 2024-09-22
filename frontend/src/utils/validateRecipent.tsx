/* eslint-disable @typescript-eslint/no-explicit-any */
import { ethers } from "ethers";

export const validateRecipient = (recipient: any) => {
  return ethers.isAddress(recipient);
};