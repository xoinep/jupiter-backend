const Transaction = require("./transaction.model");

const TransactionServices = {};

TransactionServices.createTransaction = async (data) => {
  transaction = await Transaction.create({ data });
  return transaction;
};

module.exports = TransactionServices;
