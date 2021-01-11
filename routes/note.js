const express = require("express");
const router = express.Router();
const noteServices = require("../models/note/note.services");

router.post("/create", async (req, res) => {
    /* 	#swagger.tags = ['Note']
          #swagger.description = 'Create a new note' */

    /*	#swagger.parameters['obj'] = {
              in: 'body',
              description: 'Create a new note',
              required: true,
              type: 'object',
              schema: { $ref: "#/definitions/createNoteModel" }
      } */

    let note = await noteServices.createNote(req.body);
    /* #swagger.responses[200] = {
          description: 'Note successfully created.',
          schema: { $ref: "#/definitions/createNoteModel" }
    } */
    res.send(note);
});

module.exports = router;
