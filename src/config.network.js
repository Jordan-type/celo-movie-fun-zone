const NETWORK_PARAMS = {
  chainName: "Celo",
  nativeCurrency: {
    name: "Celo",
    symbol: "CELO",
    decimals: 18,
  },
};

const MAINNET_PARAMS = {
  ...NETWORK_PARAMS,
  chainId: "0xa4ec", // 42220
  rpcUrls: ["https://forno.celo.org"],
  blockExplorerUrls: ["https://explorer.celo.org/"],
};

const ALFAJORES_PARAMS = {
  ...NETWORK_PARAMS,
  chainId: "0xaef3", // 44787
  rpcUrls: ["https://alfajores-forno.celo-testnet.org"],
  blockExplorerUrls: ["https://alfajores-blockscout.celo-testnet.org/"],
};

module.exports = { MAINNET_PARAMS, ALFAJORES_PARAMS };

// function addMainnet() {
//   window.ethereum.request({
//     method: "wallet_addEthereumChain",
//     params: [MAINNET_PARAMS],
//   });
// }

// function addAlfajores() {
//   window.ethereum.request({
//     method: "wallet_addEthereumChain",
//     params: [ALFAJORES_PARAMS],
//   });
// }
