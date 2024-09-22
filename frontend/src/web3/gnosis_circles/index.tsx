/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState, useEffect, useCallback, useMemo } from "react";
import { BrowserProviderContractRunner } from "@circles-sdk/adapter-ethers";
import { Sdk } from "@circles-sdk/sdk";

interface CirclesSDKContextProps {
  sdk: any;
  setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
  isConnected: boolean;
  adapter: any;
  circlesProvider: any;
  circlesAddress: any;
  initSdk: () => Promise<void>;
}

const CirclesSDKContext = createContext<CirclesSDKContextProps | null>(null);

export const CirclesSDK = ({ children }: { children: React.ReactNode }) => {
  const [sdk, setSdk] = useState<any>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [adapter, setAdapter] = useState<any>(null);
  const [circlesProvider, setCirclesProvider] = useState<any>(null);
  const [circlesAddress, setCirclesAddress] = useState<any>(null);

  const chainConfig = useMemo(() => ({
    pathfinderUrl: "https://pathfinder.aboutcircles.com",
    circlesRpcUrl: "https://rpc.falkenstein.aboutcircles.com",
    v1HubAddress: "0x29b9a7fbb8995b2423a71cc17cf9810798f6c543",
    v2HubAddress: "0xa5c7ADAE2fd3844f12D52266Cb7926f8649869Da",
    migrationAddress: "0xe1dCE89512bE1AeDf94faAb7115A1Ba6AEff4201",
    nameRegistryAddress: "0x738fFee24770d0DE1f912adf2B48b0194780E9AD",
    profileServiceUrl: "https://chiado-pathfinder.aboutcircles.com/profiles/",
  }), []);

  const initSdk = useCallback(async () => {
    try {
      const adapter = new BrowserProviderContractRunner();
      await adapter.init(); // Initialize the adapter before using it
      setAdapter(adapter); // Set the adapter in the state after initialization

      const circlesProvider = adapter.provider;
      setCirclesProvider(circlesProvider);

      const circlesAddress = await adapter.address;
      setCirclesAddress(circlesAddress);

      const sdk = new Sdk(chainConfig, adapter); // Pass the initialized adapter to the SDK
      setSdk(sdk); // Set the SDK in the state
      setIsConnected(true);
    } catch (error) {
      console.error("Error initializing SDK:", error);
    }
  }, [chainConfig]);

  useEffect(() => {
    initSdk();
  }, [initSdk]);

  return (
    <CirclesSDKContext.Provider
      value={{
        sdk,
        setIsConnected,
        isConnected,
        adapter,
        circlesProvider,
        circlesAddress,
        initSdk,
      }}
    >
      {children}
    </CirclesSDKContext.Provider>
  );
};

export default CirclesSDKContext;