import { http, createConfig } from "wagmi";
import { mainnet, polygon, sepolia } from "wagmi/chains";
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors";

export const config = createConfig({
  chains: [mainnet, sepolia, polygon],
  connectors: [
    injected(),
    coinbaseWallet({ appName: "Create Wagmi" }),
    walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID }),
  ],
  ssr: true,
  transports: {
    [polygon.id]: http(
      "https://polygon-mumbai.g.alchemy.com/v2/-6fJNJ8dnLAZ_07CuwW52ZyW8Z2-Agpj",
      {
        key: "alchemy",
      },
    ),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
