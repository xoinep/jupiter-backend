const express = require('express');
const router = express.Router();
const WalletServices = require('../models/wallet/wallet.services');

router.post('/find-by-areaId', async (req, res, next) => {
  /* 	#swagger.tags = ['Wallet']
          #swagger.description = 'Find all wallets by areaId' */

  /*	#swagger.parameters['obj'] = {
              in: 'body',
              description: 'Find all wallets by areaId',
              required: true,
              type: 'object',
              schema: { $ref: "#/definitions/findWalletsByIdRequest" }
      } */
  try {
    const { areaId } = req.body.payload;
    let wallets = await WalletServices.getWalletByAreaIds([areaId]);
    res.send({ wallets });
    next();
  } catch (error) {
    next(error);
  }

  /* #swagger.responses[200] = {
          description: 'User successfully obtained.',
          schema: { $ref: "#/definitions/createPoolResponse" }
    } */
});

router.post('/find-by-poolId', async (req, res, next) => {
  /* 	#swagger.tags = ['Wallet']
          #swagger.description = 'Find all wallets by poolId' */

  /*	#swagger.parameters['obj'] = {
              in: 'body',
              description: 'Find all wallets by poolId',
              required: true,
              type: 'object',
              schema: { $ref: "#/definitions/findWalletsByPoolIdRequest" }
      } */
  try {
    const { poolId } = req.body.payload;
    let wallets = await WalletServices.getWalletByPoolIds([poolId]);
    res.send({ wallets });
    next();
  } catch (error) {
    next(error);
  }

  /* #swagger.responses[200] = {
          description: 'User successfully obtained.',
          schema: { $ref: "#/definitions/createPoolResponse" }
    } */
});

router.post('/find-by-poolId-and-areaId', async (req, res, next) => {
  /* 	#swagger.tags = ['Wallet']
          #swagger.description = 'Find all wallets by poolId & areaId' */

  /*	#swagger.parameters['obj'] = {
              in: 'body',
              description: 'Find all wallets by poolId & areaId',
              required: true,
              type: 'object',
              schema: { $ref: "#/definitions/findWalletsByPoolIdAreaIdRequest" }
      } */
  try {
    const { poolId, areaId } = req.body;
    let wallets = await WalletServices.getWalletByAreaIds([areaId]);
    let result = [];
    for (let w in wallets) {
      if (wallets[w].poolId !== undefined) {
        if (wallets[w].poolId.equals(poolId)) {
          result.push(wallets[w]);
        }
      } else {
        result.push(wallets[w]);
      }
    }
    res.send({ wallets: result });
    /* #swagger.responses[200] = {
                description: 'User successfully obtained.',
                schema: { $ref: "#/definitions/createPoolResponse" }
          } */
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
