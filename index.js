const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");

//settingup middleware to allow us to pasre json data
app.use(express.json());

//api endpoints
app.listen(3000, () => {});

//connecting to my mongodb
mongoose.connect(
  "mongodb+srv://getonto:zm2kgGCDSdS5d732@backend.9hvioj9.mongodb.net/?retryWrites=true&w=majority&appName=backend"
);

//routes
app.use("/api/products", productRoute);
