require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: '0.8.10',
  networks: {
    mumbai: {
      url: process.env.STAGING_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    mainnet: {
      chainId: 1,
      url: process.env.PROD_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
//  module.exports = {
//   solidity: "0.8.10",
//   networks: {
//     mumbai: {
//       url: "https://polygon-mumbai.g.alchemy.com/v2/Oo5wIC8yYB7ncVgKuucWV3-7gi5tJHIJ",
//       accounts:
     
//     }
//   }
// };
