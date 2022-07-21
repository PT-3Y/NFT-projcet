## How to deploy an NFT Smart Contract
# 1)
```sh
git clone https://github.com/Smith0521/NFT-project.git
```
# 2) 
```sh
npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers	@openzeppelin/contracts dotenv
```
# 3)
Now, we need to create a new Next.js project for the frontend of the dapp. To do so, run the following command in your terminal:
```sh
npx create-next-app -e with-tailwindcss client
```
# 4)
After this install dependencies for the frontend inside the client folder. To do this run the following command in your terminal:
```sh
cd client

npm install axios ethers react-loader-spinner
```
## 5)
```sh
npx hardhat run scripts/deploy.js --network goerli
```

## I hope the project will run successfully.



