// import and config dotenv for accessing env variables
const dotenv = require("dotenv");
dotenv.config();

// env's
const _config = {
  PORT: process.env.PORT || 8000,
  DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
};

module.exports = Object.freeze(_config);
