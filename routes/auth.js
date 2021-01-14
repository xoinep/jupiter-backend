const express = require('express');
const router = express.Router();
const encryptor = require('../utils/encrypt');
const userServices = require('../models/user/user.services');

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
  const { email, password } = req.body;
  try {
    const token = await userServices.createUser(email, password);
    /* #swagger.responses[200] = { 
        description: 'User successfully obtained.',
        schema: { $ref: "#/definitions/SignUpRequest" } 
  } */
    console.log(token);
    res.send(token);
  } catch (e) {
    res.status(e.status).send(e.message);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  res.sendStatus(200);
});

// router.get('/test', async (req, res) => {
//   console.log(req.headers);
//   res.sendStatus(200);
// });

module.exports = router;
