const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    noteType: String,
    notes: [
        {
            date: Date,
            content: Array,
            creatorId: mongoose.SchemaTypes.ObjectId
        }
    ],
    areaId: mongoose.SchemaTypes.ObjectId,
    poolId: mongoose.SchemaTypes.ObjectId,
});

module.exports = mongoose.model("Note", noteSchema);
