import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
	solidity: "0.8.19",
	paths: {
		artifacts: "./client/build/artifacts",
	},
	networks: {
		hardhat: {
			chainId: 1337,
		},
	},
};

export default config;
