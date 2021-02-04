const Wallet = require("./wallet.model");

const WalletServices = {};

WalletServices.createWallet = async (wallet) => {
  wallet = await Wallet.create(wallet);
  return wallet;
};

WalletServices.createWallets = async (wallets) => {
  return await Wallet.create(wallets);
};

WalletServices.getWalletByPoolIds = async (poolIds) => {
  return Wallet.find({poolId: {$in: poolIds}});
};

WalletServices.getWalletByPoolAndAreaIds = async (poolIds, areaIds) => {
  return Wallet.find({$or: [{poolId: {$in: poolIds}}, {areaId: {$in: areaIds}}]});
};

WalletServices.getWalletByAreaIds = async (areaIds) => {
  return Wallet.find({ areaId: { $in: areaIds } });
};

module.exports = WalletServices;
