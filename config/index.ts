import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { cookieStorage, createStorage } from 'wagmi'
import { base } from 'wagmi/chains'

// export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
export const projectId = '6943b900e094b7dc40edf3cb3b14957e'

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
    name: 'Spin',
    description: 'Spin to win',
    url: 'https://spin-frontend-bbb.vercel.app',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [base] as const
export const config = defaultWagmiConfig({
    chains,
    projectId,
    metadata,
    ssr: true,
    storage: createStorage({
        storage: cookieStorage
    })
})