const router = require("express").Router();
require("../db/conn");
const { ObjectId } = require("mongoose");
const Note = require("../model/userSchema");
const Delete = require("../model/deleteSchema");

router.post("/", async (req, res) => {
  try {
    const {
      note: { title, text, color },
    } = req.body;
    const id = req.body.note._id;

    console.log("delete data ", id, title, text, color);

    const newData = new Delete({
      title,
      text,
      color,
      id,
    });
    newData
      .save()
      .then(() => {
        Note.findByIdAndDelete(id).then(() => {
          res.status(200).json({ message: "Delete successfuly" });
        });
      })
      .catch((err) => res.status(500).json({ error: "Delete Failed", err }));
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
