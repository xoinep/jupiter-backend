const express = require('express');
const router = express.Router();
const areaServices = require('../models/area/area.services');
const WalletServices = require('../models/wallet/wallet.services');
const walletTypes = require('../models/wallet/wallet.types');

router.post('/create', async (req, res, next) => {
  /* 	#swagger.tags = ['Area']
        #swagger.description = 'Create a new Area as well as default wallets' */

  /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Create a new area',
            required: true,
            type: 'object',
            schema: { $ref: "#/definitions/createAreaModel" }
    } */
  try {
    let { name, phone, location, target, ownerIds } = req.body;
    if (ownerIds === undefined) {
      ownerIds = [req.userId];
    } else {
      ownerIds.unshift(req.userId);
    }

    let area = await areaServices.createArea(name, location, ownerIds, phone, target);
    // Create default wallets for this area
    let wallets_to_be_created = [];
    for (const [key, value] of Object.entries(walletTypes.Fix())) {
      let wallet_model = {
        name: key,
        ownerId: area.ownerId,
        unit: value,
        areaId: area._id,
        balance: 0,
        createAt: new Date(),
      };
      wallets_to_be_created.push(wallet_model);
    }
    let wallets = await WalletServices.createWallets(wallets_to_be_created);
    res.send({
      area: area,
      wallets: wallets,
    });
    next();
  } catch (error) {
    next(error);
  }
});

router.post('/disable', async (req, res, next) => {
  try {
    let { areaId } = req.body;
    await areaServices.disableAreaById(areaId);
    res.sendStatus(200);
    next();
  } catch (error) {
    next(error);
  }
});
module.exports = router;
