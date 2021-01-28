const express = require("express");
const router = express.Router();
const userServices = require("../models/user/user.services");
const areaServices = require("../models/area/area.services");
const poolServices = require("../models/pool/pool.services");
const walletServices = require("../models/wallet/wallet.services");
const transactionService = require("../models/transaction/transaction.services");
const checkLoggedIn = require("../utils/checkLoggedIn.middleware")
const moment = require("moment");

router.get("/get", checkLoggedIn,  async (req, res) => {
  /* 	#swagger.tags = ['User']
        #swagger.description = 'Get user information'
        #swagger.security = [{
            "access_token": []
        }]
  */

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
  // const today = moment();
  // const startDate = today.startOf('week').format("YYYY-MM-DD")
  // const endDate = today.endOf('week').format("YYYY-MM-DD")
  // console.log("start Date " + startDate);
  // console.log("end Date " + endDate);
  //
  // for (const wallet of result.wallets) {
  //   let walletId = wallet._id;
  //   let transactionsByWalletId = await transactionService.findTransactionsInRangeByWalletId(startDate, endDate, walletId)
  //   result.transactions.push(transactionsByWalletId)
  // }
  // console.log(result)
  res.status(200).send(result);
});

router.post("/create-user", async(req, res) => {
  /* 	#swagger.tags = ['User']
        #swagger.description = 'create sub user ' */

  /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Create a new sub user',
            required: true,
            type: 'object',
            schema: { $ref: "#/definitions/createUserRequest" }
    } */
  try {
    let token = await userServices.createSubUser(req.body)
    res.send(token);
  }catch (e) {
    res.status(e.status).send(e.message);
  }


})

module.exports = router;
