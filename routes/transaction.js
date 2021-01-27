const express = require("express");
const router = express.Router();
const transactionService = require("../models/transaction/transaction.services");

router.post("/create", async (req, res) => {
  /* 	#swagger.tags = ['Transaction']
        #swagger.description = 'Create a new transaction' */

  /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Create a new transaction',
            required: true,
            type: 'object',
            schema: { $ref: "#/definitions/createTransactionModel" }
    } */
  const { walletId, quantity, title, customData} = req.body.payload;
  const userId = req.userId;
  let transaction = await transactionService.createTransaction(walletId, userId, Date.now(), quantity, title, customData);
  /* #swagger.responses[200] = { 
        description: 'Transaction successfully created.',
        schema: { $ref: "#/definitions/createTransactionModel" } 
  } */
  res.send(transaction);
});

router.post("/get-ranges-by-creator-id", async(req, res) => {
  /* 	#swagger.tags = ['Transaction']
        #swagger.description = 'Get transactions by creator-id in ranges' */

  /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Get transactions by creator-id',
            required: true,
            type: 'object',
            schema: { $ref: "#/definitions/getTransactionsInRangesByCreatorId" }
    } */
  let transactions = await transactionService.findTransactionsInRangeByCreatorId(req.body);
  res.send(transactions);
})

router.post("/get-by-id", async(req, res) => {
  /* 	#swagger.tags = ['Transaction']
        #swagger.description = 'Get transactions by wallet-id all time' */

  /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Get transactions by creator-id',
            required: true,
            type: 'object',
            schema: { $ref: "#/definitions/getTransactionsInRangesByCreatorId" }
    } */
  let transactions = await transactionService.findTransactionsInRangeByCreatorId(req.body);
  res.send(transactions);
})

module.exports = router;
