const mongoose = require("mongoose");

const deleteSchema = new mongoose.Schema({
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

const Delete = mongoose.model("DELETE", deleteSchema);

module.exports = Delete;
