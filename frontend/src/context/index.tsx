'use client'

import React, { ReactNode } from 'react'
import { config, projectId, metadata, networks, wagmiAdapter } from '@/config'


import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { State, WagmiProvider } from 'wagmi'
import { createAppKit } from '@reown/appkit/react'

// Setup queryClient
const queryClient = new QueryClient()

if (!projectId) throw new Error('Project ID is not defined')

// Create modal
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: networks,
  metadata: metadata,
  features: {
    analytics: true,
    emailShowWallets:false, // Optional - defaults to your Cloud configuration
  }
})

export default function AppKitProvider({
  children,
  initialState
}: {
  children: ReactNode
  initialState?: State
}) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}