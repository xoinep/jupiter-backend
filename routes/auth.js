const express = require('express');
const router = express.Router();
const encryptor = require('../utils/encrypt');
const userServices = require('../models/user/user.services');
const { verifyGoogleToken } = require('../services/google.services');

router.post('/signup', async (req, res) => {
  /* 	#swagger.tags = ['Register']
      #swagger.description = 'Endpoint to sign up user' */

  /*	#swagger.parameters['obj'] = {
          in: 'body',
          description: 'Create a new user',
          required: true,
          type: 'object',
          schema: { $ref: "#/definitions/SignUpRequest" }
  } */

  console.log(req.body);
  const { name, email, phone, location, googleToken, avatar } = req.body;
  try {
    let detailInformation = {
      isRoot: true,
      subAccounts: [],
    };
    const uid = await verifyGoogleToken(googleToken);
    const token = await userServices.createUser(name, email, phone, location, avatar, detailInformation, uid);
    /* #swagger.responses[200] = { 
        description: 'User successfully obtained.',
        schema: { $ref: "#/definitions/SignUpRequest" } 
  } */
    console.log(token);
    res.send(token);
  } catch (e) {
    console.log(e);
    res.status(e.status).send(e.message);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  res.sendStatus(200);
});

router.post('/token', async (req, res) => {
  const { token } = req.body;
  let uid;
  try {
    uid = await verifyGoogleToken(token);
  } catch (e) {
    res.send(e);
  }
  try {
    const user = await userServices.loginWithGoogle(uid);
    res.send(user);
  } catch (e) {
    res.status(e.status).send(e.message);
  }
});

module.exports = router;
