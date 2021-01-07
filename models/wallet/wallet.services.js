const Wallet = require("./wallet.model");

const WalletServices = {};

WalletServices.createWallet = async (name, ownerId, unit, areaId) => {
  wallet = await Wallet.create({ name, ownerId, unit, areaId });
  return wallet;
};

WalletServices.createWallets = async (wallets) => {
  return await Wallet.create(wallets);
};

WalletServices.getWalletByPoolIds = async (poolIds) => {
  return await Wallet.find({ poolId: { $in: poolIds } });
};

WalletServices.getWalletByAreaIds = async (areaIds) => {
  return await Wallet.find({ areaId: { $in: areaIds } });
};

module.exports = WalletServices;
