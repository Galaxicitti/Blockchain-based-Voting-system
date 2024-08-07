const path = require('path');

module.exports = {
  // Specify where the compiled contracts will be saved
  contracts_build_directory: path.join(__dirname, "build/contracts"),

  networks: {
    development: {
      host: "127.0.0.1",  // Localhost
      port: 8545,         // Port where Ganache is running
      network_id: "*",    // Match any network id
    },
  },

  // Configure Solidity compiler settings
  compilers: {
    solc: {
      version: "0.8.21",  // Specify the Solidity version to use
    },
  },
};
