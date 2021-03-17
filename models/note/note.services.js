const Note = require('./note.model');

const NoteServices = {};

NoteServices.createNote = async (noteType, content, createdAt, areaId, poolId) => {
  return await Note.create({ noteType, content, createdAt, areaId, poolId });
};

NoteServices.getNotesByAreaId = async (areaId) => {
  return await Note.find({ ownerId: areaId });
};

NoteServices.getNotesByPoolId = async (poolId) => {
  return await Note.find({ poolId: poolId });
};

NoteServices.updateNoteById = async (noteId, content) => {
  return await Note.findByIdAndUpdate(noteId, { content: content }, { new: true });
};

NoteServices.deleteById = async (noteId) => {
  return await Note.findByIdAndDelete(noteId);
};
module.exports = NoteServices;
