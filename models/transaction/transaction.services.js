const Transaction = require("./transaction.model");

const TransactionServices = {};

TransactionServices.createTransaction = async (createTransactionModel) => {
  transaction = await Transaction.create(createTransactionModel);
  return transaction;
};

module.exports = TransactionServices;
