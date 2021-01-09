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

  let transaction = await transactionService.createTransaction(req.body);
  console.log(transaction);
  /* #swagger.responses[200] = { 
        description: 'User successfully obtained.',
        schema: { $ref: "#/definitions/createTransactionModel" } 
  } */
  res.send(transaction);
  return;
});

module.exports = router;
