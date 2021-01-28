const express = require('express');
const router = express.Router();

const auth = require('./routes/auth.js');
const area = require('./routes/area.js');
const pool = require('./routes/pool.js');
const user = require('./routes/user.js');
const note = require('./routes/note.js');
const transaction = require('./routes/transaction.js');
const wallet = require('./routes/wallet.js');

router.use('/area', area);
router.use('/pool', pool);
router.use('/user', user);
router.use('/auth', auth);
router.use('/transaction', transaction);
router.use('/note', note);
router.use('/wallet', wallet);

module.exports = router;
