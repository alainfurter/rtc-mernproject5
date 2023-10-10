const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/cars")
  .then(() => {
    console.log("Connected to the mongo database");
  })
  .catch((err) => {
    console.error("Error:", err);
  });
