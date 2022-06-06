// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers, tasks } = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy

  const metaDataURI = "token";

  const [deployer] = await ethers.getSigners();

  //deploy dlz and gotm token

  const Ticket = await ethers.getContractFactory("Ticket");
  const ticket = await Ticket.deploy("BPS", "BPS", metaDataURI);
  await ticket.deployed();

  var tx = await ticket.setPresaleStart();
  await tx.wait();

  tx = await ticket.create(deployer.address);
  await tx.wait();



  console.log("ticket contract:", ticket.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
