var TarynToken = artifacts.require("./TarynToken.sol");

module.exports = function(deployer) {
  deployer.deploy(TarynToken);
};