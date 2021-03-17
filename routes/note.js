const express = require('express');
const router = express.Router();
const noteServices = require('../models/note/note.services');

router.post('/create', async (req, res) => {
  /* 	#swagger.tags = ['Note']
          #swagger.description = 'Create a new note' */

  /*	#swagger.parameters['obj'] = {
              in: 'body',
              description: 'Create a new note',
              required: true,
              type: 'object',
              schema: { $ref: "#/definitions/createNoteModel" }
      } */

  const { noteType, content, createdAt, areaId, poolId } = req.body;
  let note = await noteServices.createNote(noteType, content, createdAt, areaId, poolId);
  /* #swagger.responses[200] = {
          description: 'Note successfully created.',
          schema: { $ref: "#/definitions/createNoteModel" }
    } */
  res.send(note);
});

router.post('/get-by-poolId', async (req, res) => {
  /*	#swagger.parameters['obj'] = {
              in: 'body',
              description: 'Get notes from poolId',
              required: true,
              type: 'object',
              schema: { $ref: "#/definitions/getByPoolId" }
      } */
  const { poolId } = req.body;
  let notes = await noteServices.getNotesByPoolId(poolId);
  res.send(notes);
});

router.put('/update-by-id', async (req, res) => {
  const { noteId, updatedContent } = req.body;
  let note = await noteServices.updateNoteById(noteId, updatedContent);
  res.send(note);
});

router.delete('/delete-by-id', async (req, res) => {
  const { noteId } = req.body;
  console.log(req.body);
  console.log(noteId);
  await noteServices.deleteById(noteId);
  res.sendStatus(200);
});

module.exports = router;
