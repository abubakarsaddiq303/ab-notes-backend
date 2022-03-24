const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Port = process.env.PORT || 5000;
const Note = require("./model/userSchema");
const app = express();
const mongoose = require("mongoose");
const DB = process.env.DATABASE;

app.use(express.json());
app.use(cors());

mongoose
  .connect(DB, {
    useNewUrlParser: true,

    // serverSelectionTimeoutMS: 100000,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log("no connection"));

// const getuser = require("./router/getUser");
const postuser = require("./router/postUser");
const deleteuser = require("./router/DeleteUser");
const getDeletedData = require("./router/getdelete");
const deleted = require("./router/Deleted");

// app.use("/getuser", getuser);
app.use("/postuser", postuser);
app.use("/deleteuser", deleteuser);
app.use("/getdelete", getDeletedData);
app.use("/deleted", deleted);

app.get("/", (req, res) => {
  res.send("My Home page");
});

app.get("/getuser", async (req, res) => {
  try {
    // const { title, text, color } = req.body;
    const getData = await Note.find();
    res.status(200).json({ message: "Showed notes", getData });
  } catch {
    (err) => console.log(err);
    res.send(404);
  }
});

app.listen(Port, () => {
  console.log("helloo nodemon");
});
