const express = require('express');
const router = express.Router();
const poolServices = require('../models/pool/pool.services');
const WalletServices = require('../models/wallet/wallet.services');

router.post('/create', async (req, res) => {
  /* 	#swagger.tags = ['Pool']
        #swagger.description = 'Create a new Pool' */

  /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Create a new pool',
            required: true,
            type: 'object',
            schema: { $ref: "#/definitions/createPoolModel" }
    } */
  const { name, areaId, target, unit, area } = req.body.payload;
  let pool = await poolServices.createPool(name, areaId, target, unit, area);
  let wallet = await WalletServices.createWallet(name, areaId, target, unit, area, new Date());
  console.log(wallet);
  res.send({ pool, wallet });
  /* #swagger.responses[200] = {
        description: 'User successfully obtained.',
        schema: { $ref: "#/definitions/createPoolResponse" }
  } */
});

module.exports = router;
