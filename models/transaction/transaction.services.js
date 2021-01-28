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
    startDate, endDate, walletId
) => {
  return Transaction.find({
    createdAt: {$gte: startDate, $lte: endDate},
    walletId: walletId,
  });
};

TransactionServices.findTransactionsInRangeByWalletIds = async (startDate, endDate, walletIds) => {
 return Transaction.find({
   createdAt: {$gte: startDate, $lte: endDate},
   walletId: {$in: walletIds}
 })
}

module.exports = TransactionServices;
