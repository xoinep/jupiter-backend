var express = require("express");
var router = express.Router();
var poolServices = require("../models/pool/pool.services");

router.post("/create", async (req, res) => {
  /* 	#swagger.tags = ['Pool']
        #swagger.description = 'Create a new Pool' */

  /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Create a new pool',
            required: true,
            type: 'object',
            schema: { $ref: "#/definitions/createPoolModel" }
    } */

  let pool = await poolServices.createPool(req.body);
  console.log(pool);
  /* #swagger.responses[200] = { 
        description: 'User successfully obtained.',
        schema: { $ref: "#/definitions/createPoolModel" } 
  } */
  res.send(pool);
  return;
});

module.exports = router;
