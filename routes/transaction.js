const express = require('express');
const router = express.Router();
const transactionService = require('../models/transaction/transaction.services');

router.post('/create', async (req, res, next) => {
  /* 	#swagger.tags = ['Transaction']
        #swagger.description = 'Create a new transaction' */

  /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Create a new transaction',
            required: true,
            type: 'object',
            schema: { $ref: "#/definitions/createTransactionModel" }
    } */
  try {
    const { walletId, quantity, customData, name, unit, cost, poolId, createdDate } = req.body;
    const userId = req.userId;
    let transaction = await transactionService.createTransaction(
      walletId,
      userId,
      createdDate,
      quantity,
      customData,
      name,
      unit,
      cost,
      poolId
    );
    /* #swagger.responses[200] = { 
        description: 'Transaction successfully created.',
        schema: { $ref: "#/definitions/createTransactionModel" } 
  } */
    res.send(transaction);
    next();
  } catch (error) {
    next(error);
  }
});

router.post('/get-ranges-by-creator-id', async (req, res, next) => {
  /* 	#swagger.tags = ['Transaction']
        #swagger.description = 'Get transactions by creator-id in ranges' */

  /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Get transactions by creator-id',
            required: true,
            type: 'object',
            schema: { $ref: "#/definitions/getTransactionsInRangesByCreatorId" }
    } */
  try {
    let transactions = await transactionService.findTransactionsInRangeByCreatorId(req.body);
    res.send(transactions);
    next();
  } catch (error) {
    next(error);
  }
});

router.post('/get-by-id', async (req, res, next) => {
  /* 	#swagger.tags = ['Transaction']
        #swagger.description = 'Get transactions by wallet-id all time'
        #swagger.security = [{
            "access_token": []
        }]
   */

  /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Get transactions by creator-id',
            required: true,
            type: 'object',
            schema: { $ref: "#/definitions/getTransactionsInRangesByWalletIdModel" }
    } */
  try {
    const { walletId } = req.body;
    let transactions = await transactionService.findTransactionsInRangeByWalletId(walletId);
    res.send(transactions);
    next();
  } catch (error) {
    next(error);
  }
});

router.post('/get-by-ids', async (req, res, next) => {
  /* 	#swagger.tags = ['Transaction']
        #swagger.description = 'Get transactions by wallet-id all time' */

  /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Get transactions by creator-id',
            required: true,
            type: 'object',
            schema: { $ref: "#/definitions/getTransactionsInRangesByWalletIdModel" }
    } */
  try {
    const { startDate, endDate, walletIds } = req.body;
    let transactions = await transactionService.findTransactionsInRangeByWalletIds(startDate, endDate, walletIds);
    res.send(transactions);
    next();
  } catch (error) {
    next(error);
  }
});

router.delete('/delete-by-id', async (req, res, next) => {
  /* 	#swagger.tags = ['Transaction']
       #swagger.description = 'Delete transaction by Id'
       */

  /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Get transactions by creator-id',
            required: true,
            type: 'object',
            schema: { $ref: "#/definitions/deleteTransactionByIdRequest" }
    } */
  try {
    const { transactionId } = req.body;
    await transactionService.deleteById(transactionId);
    res.sendStatus(200);
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
