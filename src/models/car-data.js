const { Car } = require("./cars");

let cars = [
  {
    brand: "Toyota",
    model: "Yaris",
    color: "Black",
    year: "2017",
  },
  {
    brand: "Nissan",
    model: "X-Trail",
    color: "Grey",
    year: "2020",
  },
  {
    brand: "Smart",
    model: "Roadster",
    color: "Blue",
    year: "2003",
  },
];

const clearAndInsertData = async () => {
  await Car.collection.drop();
  await Car.insertMany(cars);
};

module.exports = { clearAndInsertData };
