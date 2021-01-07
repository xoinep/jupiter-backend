var express = require("express");
var router = express.Router();
var areaServices = require("../models/area/area.services");

router.post("/create", async (req, res) => {
  /* 	#swagger.tags = ['Area']
        #swagger.description = 'Create a new Area' */

  /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Create a new area',
            required: true,
            type: 'object',
            schema: { $ref: "#/definitions/createAreaModel" }
    } */

  const { name, ownerId, location } = req.body;
  let area = await areaServices.createArea(req.body);
  console.log(area);
  /* #swagger.responses[200] = { 
        description: 'User successfully obtained.',
        schema: { $ref: "#/definitions/createAreaModel" } 
  } */
  res.send(area);
  return;
});

module.exports = router;
