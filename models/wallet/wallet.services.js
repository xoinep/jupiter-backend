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
  return await Wallet.find({ poolId: { $in: poolIds } });
};

WalletServices.getWalletByAreaIds = async (areaIds) => {
  return await Wallet.find({ areaId: { $in: areaIds } });
};

module.exports = WalletServices;
