const router = require("express").Router();
require("../db/conn");
const Delete = require("../model/deleteSchema");

router.get("/", async (req, res) => {
  try {
    // const { title, text, color } = req.body;
    const getdeleteData = await Delete.find();
    res.status(200).json({ message: "Showed deleted notes", getdeleteData });
  } catch {
    (err) => console.log(err);
    res.send(404);
  }
});

module.exports = router;
