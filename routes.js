const express = require("express");
const router = express.Router();

const register = require("./routes/register.js");
const area = require("./routes/area.js");
const pool = require("./routes/pool.js");

router.use("/area", area);
router.use("/pool", pool);

module.exports = router;
