const Wallet = require("./wallet.model");

const WalletServices = {};

WalletServices.createWallet = async (name, ownerId, unit, poolId) => {
  let wallet = await Wallet.findOne({ name });
  if (wallet) {
    return false;
  }
  wallet = await Wallet.create({ name, ownerId, unit, poolId });
  return wallet;
};

module.exports = WalletServices;
