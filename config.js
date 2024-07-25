// import and config dotenv for accessing env variables
const dotenv = require("dotenv");
dotenv.config();

// env's
const PORT = process.env.PORT;

module.exports = { PORT };
