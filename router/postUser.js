const router = require("express").Router();
require("../db/conn");
const Note = require("../model/userSchema");

router.post("/", async (req, res) => {
  try {
    const { title, text, color } = req.body;
    const user = new Note({ title, text, color });
    user
      .save()
      .then(() => {
        res.status(201).json({ message: "Note add successfuly" });
      })
      .catch((err) => res.status(500).json({ error: "Note failed" }));
  } catch {
    (err) => console.log(err);
  }
});

module.exports = router;
