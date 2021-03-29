const express = require('express');
const router = express.Router();
const encryptor = require('../utils/encrypt');
const userServices = require('../models/user/user.services');
const { verifyGoogleToken } = require('../services/google.services');

router.post('/signup', async (req, res, next) => {
  /* 	#swagger.tags = ['Register']
      #swagger.description = 'Endpoint to sign up user' */

  /*	#swagger.parameters['obj'] = {
          in: 'body',
          description: 'Create a new user',
          required: true,
          type: 'object',
          schema: { $ref: "#/definitions/SignUpRequest" }
  } */

  const { name, phone, location, googleToken, avatar } = req.body;
  try {
    let detailInformation = {
      isRoot: true,
      subAccounts: [],
    };
    const email = await verifyGoogleToken(googleToken);
    const token = await userServices.createUser(name, email, phone, location, avatar, detailInformation);
    /* #swagger.responses[200] = { 
        description: 'User successfully obtained.',
        schema: { $ref: "#/definitions/SignUpRequest" } 
  } */
    res.send(token);
    next();
  } catch (e) {
    next(e);
  }
});

router.post('/signupDevUser', async (req, res, next) => {
  /* 	#swagger.tags = ['Register']
      #swagger.description = 'Endpoint to sign up user' */

  /*	#swagger.parameters['obj'] = {
          in: 'body',
          description: 'Create a new user',
          required: true,
          type: 'object',
          schema: { $ref: "#/definitions/SignUpRequest" }
  } */

  const { name, email, phone, location, googleToken, avatar } = req.body;
  try {
    let detailInformation = {
      isRoot: true,
      subAccounts: [],
    };
    const token = await userServices.createUser(name, email, phone, location, avatar, detailInformation);
    /* #swagger.responses[200] = {
        description: 'User successfully obtained.',
        schema: { $ref: "#/definitions/SignUpRequest" }
  } */
    res.send(token);
    next();
  } catch (e) {
    next(e);
  }
});

// TODO: Disable this on production
router.post('/loginWithEmail', async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await userServices.loginWithGoogle(email);
    res.send(user);
    console.log(user);
    next();
  } catch (e) {
    next(e);
  }
});

router.post('/token', async (req, res, next) => {
  const { token } = req.body;
  let email = null;
  try {
    email = await verifyGoogleToken(token);
    const user = await userServices.loginWithGoogle(email);
    res.send(user);
    next();
  } catch (e) {
    next(e);
  }
});

module.exports = router;
