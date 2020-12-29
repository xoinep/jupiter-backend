const express = require("express");
const router = express.Router();

const register = require("./routes/register.js");

router.use(register);

module.exports = router;
