var express = require("express");
var router = express.Router();
var encryptor = require("../services/encrypt");
var userServices = require("../models/user/user.services");

// router.post("/generate-token", async (req, res) => {
//   /* 	#swagger.tags = ['Register']
//       #swagger.description = 'Endpoint to Register Service' */

//   /*	#swagger.parameters['obj'] = {
//           in: 'body',
//           description: 'Generate an encrypted token based on facebook page id and long lived access token',
//           required: true,
//           type: 'object',
//           schema: { $ref: "#/definitions/GenerateTokenRequest" }
//   } */
//   let token = `${req.body.token}:${req.body.pageId}`;
//   const encryptedString = encryptor.encrypt(token);
//   res.send(encryptedString);
//   return;
// });

router.post("/signup", async (req, res) => {
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
  const { username, password } = req.body;
  const user = await userServices.createUser(username, password);
  console.log(user);
  if (!user) {
    res.status(201).send("User already exists!");
    return;
  }
  /* #swagger.responses[200] = { 
        description: 'User successfully obtained.',
        schema: { $ref: "#/definitions/SignUpRequest" } 
  } */
  res.send(user);
});

module.exports = router;
