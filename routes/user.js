const express = require('express');
const router = express.Router();
const userServices = require('../models/user/user.services');
const areaServices = require('../models/area/area.services');
const poolServices = require('../models/pool/pool.services');
const checkLoggedIn = require('../utils/checkLoggedIn.middleware');
const jwt = require('../utils/jwt');
const { ErrorHandler, ErrorCodes } = require('../utils/error');
router.get('/get', checkLoggedIn, async (req, res, next) => {
  /* 	#swagger.tags = ['User']
          #swagger.description = 'Get user information'
          #swagger.security = [{
              "access_token": []
          }]
    */

  try {
    const { userId } = req;
    let user = await userServices.findUserById(userId);
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

    // Format data
    let result = {
      areas,
      pools,
      user,
    };
    res.status(200).send(result);
    next();
  } catch (error) {
    next(error);
  }
});

router.post('/create-user', async (req, res, next) => {
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
    const { name, email, phone, location } = req.body;
    const userId = req.userId;
    let user = await userServices.findUserById(userId);
    let detailInformation = user.detailInformation;
    let token = await userServices.createSubUser(name, email, phone, location, null);
    let subAccountId = jwt.decode(token);
    detailInformation.subAccounts.push({ subAccountId: subAccountId.userId, subAccountName: name });
    user = await userServices.updateSubUsers(userId, { detailInformation: detailInformation });
    res.send(user);
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
