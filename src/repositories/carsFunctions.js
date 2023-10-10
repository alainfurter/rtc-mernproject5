const { Car } = require("../models/cars");

const getAllCarsDB = async () => {
  const cars = await Car.find({});
  return cars;
};

const getCarByIdDB = async (id) => {
  const car = await Car.findById(id);
  return car;
};

const createCarDB = async (payload) => {
  const newCar = new Car(payload);
  await newCar.save();
  return newCar;
};

const updateCarDB = async (id, payload) => {
  const updatedCar = await Car.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return updatedCar;
};

const deleteCarDB = async (id) => {
  await Car.findByIdAndDelete(id);
};

module.exports = {
  getAllCarsDB,
  getCarByIdDB,
  createCarDB,
  updateCarDB,
  deleteCarDB,
};
