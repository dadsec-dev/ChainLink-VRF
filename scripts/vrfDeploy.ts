import { ethers } from "hardhat";

async function main() {
    const [oner, acct1, acct2, acct3] = await ethers.getSigners();


    const ranNumContract = await ethers.getContractFactory("vrfRanGenerator");
    const vrfDeploy = await ranNumContract.deploy("10140");

    await vrfDeploy.deployed();

    const deployedVrf = vrfDeploy.address;
    console.log(`vrf contract deployed to ${deployedVrf}`);

    //vrf contract deployed to 0x0ccd362E9476c2573c6f28c68B237201FD0Dc732
    //await vrfDeploy.requestRandomWords();
    //Successfully verified contract vrfRanGenerator on Etherscan.
//https://goerli.etherscan.io/address/0x0ccd362E9476c2573c6f28c68B237201FD0Dc732#code 

    
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});