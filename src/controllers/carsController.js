const {
  getAllCarsDB,
  getCarByIdDB,
  createCarDB,
  updateCarDB,
  deleteCarDB,
} = require("../repositories/carsFunctions");

// GET http://localhost:3001/cars
const getAllCars = async (req, res) => {
  const cars = await getAllCarsDB();
  res.status(200).json({ data: cars });
};

// GET http://localhost:3001/car/:id
const getCarById = async (req, res) => {
  const { id } = req.params;
  const car = await getCarByIdDB(id);
  res.status(200).json({ data: car });
};

// POST http://localhost:3001/cars
const createCar = async (req, res) => {
  const newCar = await createCarDB({
    brand: req.body.brand,
    model: req.body.model,
    color: req.body.color,
    year: req.body.year,
  });
  res.status(201).json({
    data: newCar,
  });
};

// PUT http://localhost:3001/car/:id
const updateCar = async (req, res) => {
  const { id } = req.params;
  //const { brand, model, color, year } = req.body;
  const updatedCar = await updateCarDB(id, req.body);
  res.status(200).json({ data: updatedCar });
};

// DELETE http://localhost:3001/car/:id
const deleteCar = async (req, res) => {
  const { id } = req.params;
  deleteCarDB(id);
  res.status(200).json({ data: "Car deleted" });
};

module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
