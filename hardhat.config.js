require('@nomiclabs/hardhat-waffle')
require('dotenv').config()

module.exports = {
    solidity: '0.8.3',
    networks: {
        goerli: {
            url: `${process.env.INFURA_GOERLI_ENDPOINT}`,
            accounts: [`${process.env.ACCOUNT_KEY}`],
        },
    },
}