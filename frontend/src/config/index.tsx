// import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { cookieStorage, createStorage } from '@wagmi/core'
import { mainnet, sepolia } from '@reown/appkit/networks'
import { morphHolesky } from "viem/chains";
import { CaipNetwork } from '@reown/appkit';
// Get projectId from https://cloud.walletconnect.com
// export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
export const projectId = "50ebdda4ae288d5a600a67d2b845506e";

if (!projectId) throw new Error('Project ID is not defined')

export const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

export const morph = {
  id: `eip155:${morphHolesky.id}`,
  chainId: morphHolesky.id,
  chainNamespace: 'eip155',
  name: morphHolesky.name,
  currency: 'ETH',
  rpcUrl: 'https://rpc-quicknode-holesky.morphl2.io',
  explorerUrl: 'https://rpc-quicknode-holesky.morphl2.io',
} as CaipNetwork;

export const networks = [mainnet, sepolia, morph]

// Create wagmiConfig

export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks: networks,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  }),
})



export const config = wagmiAdapter.wagmiConfig