const Transaction = require("./transaction.model");

const TransactionServices = {};

TransactionServices.createTransaction = async (createTransactionModel) => {
  return await Transaction.create(createTransactionModel);
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
