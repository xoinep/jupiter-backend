var express = require("express");
var router = express.Router();
var encryptor = require("../services/encrypt");
var userServices = require("../model/user.services");

router.post("/token/generate", async (req, res) => {
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
