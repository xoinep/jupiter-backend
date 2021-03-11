const Wallet = require('./wallet.model');

const WalletServices = {};

WalletServices.createWallet = async (name, areaId, target, unit, area, createdAt) => {
  wallet = await Wallet.create({ name, areaId, target, unit, area, createdAt });
  return wallet;
};

WalletServices.createWallets = async (wallets) => {
  return await Wallet.create(wallets);
};

WalletServices.getWalletByPoolIds = async (poolIds) => {
  return Wallet.find({ poolId: { $in: poolIds } });
};

WalletServices.getWalletByPoolAndAreaIds = async (poolIds, areaIds) => {
  return Wallet.find({ $or: [{ poolId: { $in: poolIds } }, { areaId: { $in: areaIds } }] });
};

WalletServices.getWalletByAreaIds = async (areaIds) => {
  return Wallet.find({ areaId: { $in: areaIds } });
};

module.exports = WalletServices;
