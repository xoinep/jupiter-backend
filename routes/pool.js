const express = require("express");
const router = express.Router();
const poolServices = require("../models/pool/pool.services");
const WalletServices = require("../models/wallet/wallet.services");

router.post("/create", async (req, res) => {
  /* 	#swagger.tags = ['Pool']
        #swagger.description = 'Create a new Pool' */

  /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Create a new pool',
            required: true,
            type: 'object',
            schema: { $ref: "#/definitions/createPoolModel" }
    } */

  let pool = await poolServices.createPool(req.body);
  console.log(pool);
  /* #swagger.responses[200] = { 
        description: 'User successfully obtained.',
        schema: { $ref: "#/definitions/createPoolModel" } 
  } */
  // Create specific wallet for pool
  let wallet_in_pool = {
    name: pool.target,
    unit: pool.unit,
    areaId: pool.areaId,
    balance: 0,
    poolId: pool._id,
  };

  let wallet = await WalletServices.createWallet(wallet_in_pool);
  res.send({ pool, wallet });
});

module.exports = router;
