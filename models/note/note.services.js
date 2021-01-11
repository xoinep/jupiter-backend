const Note = require("./note.model");

const NoteServices = {};

NoteServices.createNote = async (createNoteModel) => {
    return Note.create(createNoteModel);
};

NoteServices.getNotesByAreaId = async (areaId) => {
    return Note.find({ ownerId: areaId });
};

module.exports = NoteServices;
