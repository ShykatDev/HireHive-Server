const express = require("express");
const mongoose = require("mongoose");
const { PORT, DB_CONNECTION_STRING } = require("./config.js");

const app = express();

const startServer = () => {
  console.log(`✅ Server is running on https://localhost:${PORT}`);
};

const connectDB = async () => {
  try {
    console.log("⌛ Connecting...");

    // On Success
    mongoose.connection.on("connected", () => {
      console.log("✅ Database Connected!");
      app.listen(PORT, startServer);
    });

    // On Failed
    mongoose.connection.on("error", (err) => {
      console.log("❌ Failed to connect.", err);
    });

    // Connect to DB
    await mongoose.connect(DB_CONNECTION_STRING);
  } catch (err) {
    console.log("❌ Failed to connect first time.", err);
    process.exit(1);
  }
};

module.exports = connectDB;
