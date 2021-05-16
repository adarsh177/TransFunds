const Migrations = artifacts.require("TransFUNDS");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
