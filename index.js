const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();
app.use(express.json());

app.use(cors());
app.use(express.urlencoded({ extended: true }));

//import routes
const vendorRoute = require("./routes/routes");
app.use("/", vendorRoute);
// mongo DB connection start

const Connection = async () => {
  const URL = `mongodb+srv://js-assign:js-assign@cluster0.vjgjhq5.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

Connection();

let PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
