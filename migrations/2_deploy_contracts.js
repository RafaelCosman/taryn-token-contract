var SongToken = artifacts.require("./SongToken.sol");

module.exports = function(deployer) {
  deployer.deploy(SongToken);
};