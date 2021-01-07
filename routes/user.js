var express = require("express");
var router = express.Router();
var userServices = require("../models/user/user.services");
var areaServices = require("../models/area/area.services");
var poolServices = require("../models/pool/pool.services");
var walletServices = require("../models/wallet/wallet.services");

router.post("/get", async (req, res) => {
  /* 	#swagger.tags = ['User']
        #swagger.description = 'Get user information' */

  /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Create a new area',
            required: true,
            type: 'object',
            schema: { $ref: "#/definitions/getUserModel" }
    } */

  const { userId } = req.body;

  // Get user's Areas
  let areas = await areaServices.getAreasByOwnerId(userId);

  let areaIds = [];
  areas.forEach((element) => {
    areaIds.push(element._id);
  });

  let poolIds = [];
  let pools = await poolServices.getPoolsByAreaIds(areaIds);

  //   pools.forEach((e) => {
  //     poolIds.push(e._id);
  //   });

  //   let wallets = await walletServices.getWalletByPoolIds(poolIds);
  //   console.log(wallets);
  res.sendStatus(200);
  return;
});

module.exports = router;
