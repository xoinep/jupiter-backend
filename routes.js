const express = require("express");
const router = express.Router();

const register = require("./routes/register.js");
const area = require("./routes/area.js");

router.use("/area", area);
router.use(register);

module.exports = router;
