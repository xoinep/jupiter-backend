const Transaction = require("./transaction.model");

const TransactionServices = {};

TransactionServices.createTransaction = async (walletId, creatorId, createdDate, quantity, title, customData) => {
  return await Transaction.create({walletId: walletId, creatorId:creatorId, createdDate:createdDate, quantity: quantity, title:title, customData:customData});
};

TransactionServices.findTransactionsInRangeByCreatorId = async (
    getTransactionsInRangesByCreatorIdModel
) => {
  const {startDate, endDate, creatorId} = getTransactionsInRangesByCreatorIdModel;
  return Transaction.find({
    createdDate: {$gte: startDate, $lte: endDate},
    creatorId: creatorId,
  });
};

TransactionServices.findTransactionsInRangeByWalletId = async (
    getTransactionsInRangesByWalletIdModel
) => {
  const {startDate, endDate, walletId} = getTransactionsInRangesByWalletIdModel;
  return Transaction.find({
    createdDate: {$gte: startDate, $lte: endDate},
    walletId: walletId,
  });
};

module.exports = TransactionServices;
