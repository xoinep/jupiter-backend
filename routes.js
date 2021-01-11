const express = require("express");
const router = express.Router();

const register = require("./routes/register.js");
const area = require("./routes/area.js");
const pool = require("./routes/pool.js");
const user = require("./routes/user.js");
const note = require("./routes/note.js");
const transaction = require("./routes/transaction.js");

router.use("/area", area);
router.use("/pool", pool);
router.use("/user", user);
router.use("/register", register);
router.use("/transaction", transaction);
router.use("/note", note);

module.exports = router;
