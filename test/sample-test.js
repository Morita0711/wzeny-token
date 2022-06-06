const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Ticket = await ethers.getContractFactory("Ticket");
    const ticket = await Ticket.deploy("a", "a", "a");
    await ticket.deployed();
  });
});
