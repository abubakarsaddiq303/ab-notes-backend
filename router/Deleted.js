const router = require("express").Router();
require("../db/conn");
const Deleted = require("../model/deleteSchema");

router.post("/", async (req, res) => {
  try {
    const id = req.body.note._id;
    console.log("Delete Id ::", id);
    await Deleted.findByIdAndDelete(id)
      .then(() => {
        res.status(200).json({ message: "Delete successfuly" });
      })
      .catch((err) => res.status(500).json({ error: "Delete Failed", err }));
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
