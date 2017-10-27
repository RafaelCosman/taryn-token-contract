var HDWalletProvider = require("truffle-hdwallet-provider");

const mnemonic = process.env.MNEMONIC
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"),
      network_id: "3",
      gas: 4500000,
    },
    rinkeby: {
      provider: new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/"),
      network_id: 4,
      gas: 400000
    },
    live: {
      provider: new HDWalletProvider(mnemonic, "	https://mainnet.infura.io/"),
      network_id: 1,
      gas: 400000
    }
  }
};
