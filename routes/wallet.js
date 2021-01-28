const express = require("express");
const router = express.Router();
const WalletServices = require("../models/wallet/wallet.services");

router.post("/find-by-areaId", async (req, res) => {
    /* 	#swagger.tags = ['Wallet']
          #swagger.description = 'Find all wallets by areaId' */

    /*	#swagger.parameters['obj'] = {
              in: 'body',
              description: 'Find all wallets by areaId',
              required: true,
              type: 'object',
              schema: { $ref: "#/definitions/findWalletsByIdRequest" }
      } */
    const { areaId } = req.body.payload;
    console.log('find-by-areaId ' + areaId)
    let wallets = await WalletServices.getWalletByAreaIds([areaId])
    console.log('find-by-areaId' + JSON.stringify(wallets))
    res.send({ wallets });
    /* #swagger.responses[200] = {
          description: 'User successfully obtained.',
          schema: { $ref: "#/definitions/createPoolResponse" }
    } */
});

module.exports = router;
