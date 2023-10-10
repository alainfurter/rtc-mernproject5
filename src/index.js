require("dotenv").config(); // before everything else

const express = require("express");
require("./config/db");

const baseRouter = require("./routes/baseRoutes");
const carRouter = require("./routes/carRoutes");

const { clearAndInsertData } = require("./models/car-data");
const app = express();

app.use(express.json());

clearAndInsertData();

app.use("/cars", carRouter);
app.use("/", baseRouter);

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
