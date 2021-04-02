const Transaction = require('./transaction.model');

const TransactionServices = {};

TransactionServices.createTransaction = async (
  walletId,
  creatorId,
  createdDate,
  quantity,
  customData,
  name,
  unit,
  cost,
  poolId
) => {
  let res = await Transaction.create({
    walletId: walletId,
    creatorId: creatorId,
    createdAt: createdDate,
    quantity: quantity,
    name: name,
    customData: customData,
    unit: unit,
    costPerUnit: cost,
    poolId: poolId,
  });
  return res;
};

TransactionServices.findTransactionsInRangeByCreatorId = async (getTransactionsInRangesByCreatorIdModel) => {
  const { startDate, endDate, creatorId } = getTransactionsInRangesByCreatorIdModel;
  return await Transaction.find({
    createdDate: { $gte: startDate, $lte: endDate },
    creatorId: creatorId,
  });
};

TransactionServices.findTransactionsInRangeByWalletId = async (walletId) => {
  return await Transaction.find({
    walletId: walletId,
  }).sort({ createdAt: -1 });
};

TransactionServices.findTransactionsInRangeByWalletIds = async (startDate, endDate, walletIds) => {
  return await Transaction.find({
    createdAt: { $gte: startDate, $lte: endDate },
    walletId: { $in: walletIds },
  });
};

TransactionServices.deleteById = async (transactionId) => {
  return await Transaction.findByIdAndDelete(transactionId);
};

module.exports = TransactionServices;
