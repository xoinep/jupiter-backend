var express = require("express");
var router = express.Router();
var encryptor = require("../services/encrypt");
var userServices = require("../models/user/user.services");

/**
 * JSON parameters require a model. This one just has "name"
 * @typedef GenerateTokenRequest
 * @property {string} pageId.required - The facebook pageId - eg: page129876414
 * @property {string} token.required - The long lived facebook access token - eg: 9asdasdasdasd991919
 */
/**
 * This route will return an encrypted string from facebook access token and pageId
 * @route POST /generate-token
 * @group Register
 * @param {GenerateTokenRequest.model} object.body.required - parameters
 * @returns {object} 200 - An encrypted string
 * @returns {Error}  default - Unexpected error
 * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
 * @headers {string} 200.X-Expires-After - 	date in UTC when token expires
 * @produces application/json
 * @consumes application/json
 */
router.post("/generate-token", async (req, res) => {
  let token = `${req.body.token}:${req.body.pageId}`;
  const encryptedString = encryptor.encrypt(token);
  res.send(encryptedString);
});

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const user = await userServices.createUser(username, password);
  if (!user) {
    res.status(201).send("User already exists!");
  }
  res.send(user);
});

module.exports = router;
