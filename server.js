import express from "express";

const app = express();

//! IMPORTS
//? morgan
import morgan from "morgan";
//? dotenv
import dotenv from "dotenv";
dotenv.config();
//?db
import connectDB from "./db/connect.js";

//! MIDDLEWARE

//? json
app.use(express.json());
//? morgan
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

//! ROUTERS

//! SETUP

const port = 5000 || process.env.PORT;

const startApp = async () => {
  try {
    // connecting db
    connectDB(process.env.DB_URL);
    // starting server
    app.listen(port, () => console.log(`SERVER IS LISTENING ON PORT ${port}`));
  } catch (err) {
    console.log(`UNEXPECTED ERROR ${err.message}`);
  }
};

startApp();
