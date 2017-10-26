var TrustCoin = artifacts.require("./TrustCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(TrustCoin);
};