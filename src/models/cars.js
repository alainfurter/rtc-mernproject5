const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  brand: String,
  model: String,
  color: String,
  year: String,
});

const Car = mongoose.model("Car", carSchema);

module.exports = { Car };
