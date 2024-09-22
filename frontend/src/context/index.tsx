/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { ReactNode, useState, useEffect, useCallback, createContext } from 'react';
import { config, projectId, metadata, networks, wagmiAdapter } from '@/config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { State, WagmiProvider } from 'wagmi';
import { createAppKit } from '@reown/appkit/react';
import { BrowserProviderContractRunner } from '@circles-sdk/adapter-ethers';
import { Sdk } from '@circles-sdk/sdk';

// Setup queryClient
const queryClient = new QueryClient();

if (!projectId) throw new Error('Project ID is not defined');

// Create AppKit modal
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: networks,
  metadata: metadata,
  features: {
    analytics: true,
    emailShowWallets: false, // Optional - defaults to your Cloud configuration
  },
});

// CirclesSDKContext creation
const CirclesSDKContext = createContext<any>(null);

// CirclesSDK Provider
export const CirclesSDKProvider = ({ children }: { children: ReactNode }) => {
  const [sdk, setSdk] = useState<Sdk | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [adapter, setAdapter] = useState<BrowserProviderContractRunner | null>(null);
  const [circlesProvider, setCirclesProvider] = useState<any>(null);
  const [circlesAddress, setCirclesAddress] = useState<string | null>(null);

  const chainConfig = {
    pathfinderUrl: 'https://pathfinder.aboutcircles.com',
    circlesRpcUrl: 'https://rpc.falkenstein.aboutcircles.com',
    v1HubAddress: '0x29b9a7fbb8995b2423a71cc17cf9810798f6c543',
    v2HubAddress: '0xa5c7ADAE2fd3844f12D52266Cb7926f8649869Da',
    migrationAddress: '0xe1dCE89512bE1AeDf94faAb7115A1Ba6AEff4201',
    nameRegistryAddress: '0x738fFee24770d0DE1f912adf2B48b0194780E9AD',
    profileServiceUrl: 'https://chiado-pathfinder.aboutcircles.com/profiles/',
  };

  const initSdk = useCallback(async () => {
    try {
      const adapterInstance = new BrowserProviderContractRunner();
      await adapterInstance.init();
      setAdapter(adapterInstance);

      const provider = adapterInstance.provider;
      setCirclesProvider(provider);

      const address = await adapterInstance.address ?? null;
      setCirclesAddress(address);

      const circlesSdk = new Sdk(chainConfig, adapterInstance);
      setSdk(circlesSdk);
      setIsConnected(true);
    } catch (error) {
      console.error('Error initializing SDK:', error);
    }
  }, []);

  useEffect(() => {
    initSdk();
  }, [initSdk]);

  return (
    <CirclesSDKContext.Provider
      value={{
        sdk,
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

// Higher-level Provider to integrate AppKitProvider and CirclesSDKProvider
export default function AppKitCirclesProvider({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: State;
}) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <CirclesSDKProvider>{children}</CirclesSDKProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
