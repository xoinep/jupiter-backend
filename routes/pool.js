const express = require('express');
const router = express.Router();
const poolServices = require('../models/pool/pool.services');
const WalletServices = require('../models/wallet/wallet.services');

router.post('/create', async (req, res, next) => {
  /* 	#swagger.tags = ['Pool']
        #swagger.description = 'Create a new Pool' */

  /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Create a new pool',
            required: true,
            type: 'object',
            schema: { $ref: "#/definitions/createPoolModel" }
    } */
  try {
    const { name, areaId, target, unit, area, depth } = req.body;
    let pool = await poolServices.createPool(name, areaId, target, unit, area, depth);
    let wallet = await WalletServices.createWallet('SEED_UNIT', areaId, unit, pool._id, new Date());
    res.send({ pool, wallet });
    /* #swagger.responses[200] = {
        description: 'User successfully obtained.',
        schema: { $ref: "#/definitions/createPoolResponse" }
  } */
    next();
  } catch (error) {
    next(error);
  }
});

router.post('/disable', async (req, res, next) => {
  try {
    const { poolId } = req.body;
    await poolServices.disablePoolById(poolId);
    res.sendStatus(200);
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
