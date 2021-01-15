const express = require("express");
const router = express.Router();
const userServices = require("../models/user/user.services");
const areaServices = require("../models/area/area.services");
const poolServices = require("../models/pool/pool.services");
const walletServices = require("../models/wallet/wallet.services");

router.get("/get", async (req, res) => {
  /* 	#swagger.tags = ['User']
        #swagger.description = 'Get user information' */

  const { userId } = req;
  console.log(userId)
  // Get user's Areas
  let areas = await areaServices.getAreasByOwnerId(userId);

  let areaIds = [];
  areas.forEach((element) => {
    areaIds.push(element._id);
  });

  let poolIds = [];
  let pools = await poolServices.getPoolsByAreaIds(areaIds);

  pools.forEach((e) => {
    poolIds.push(e._id);
  });

  let walletByPools = await walletServices.getWalletByPoolIds(poolIds);
  console.log(walletByPools);

  let walletsByAreas = await walletServices.getWalletByAreaIds(areaIds);
  console.log(walletsByAreas);

  // Format data
  let result = {
    areas,
    pools,
    wallets: [... walletByPools, ... walletsByAreas]
  }
  console.log(result)
  res.status(200).send(result);
});

router.post("/create-sub-user", async(req, res) => {
  /* 	#swagger.tags = ['User']
        #swagger.description = 'create sub user ' */

  /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Create a new sub user',
            required: true,
            type: 'object',
            schema: { $ref: "#/definitions/createSubUserRequest" }
    } */
  try {
    let token = await userServices.createSubUser(req.body)
    res.send(token);
  }catch (e) {
    res.status(e.status).send(e.message);
  }


})

module.exports = router;
