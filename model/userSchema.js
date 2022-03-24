const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const Note = mongoose.model("NOTE", noteSchema);

module.exports = Note;
