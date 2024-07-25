// entry point of the backend application

const express = require("express");
const bodyParser = require("body-parser");

const connectDB = require("./db.js");
const publicRoutes = require("./routes/public.routes.js");
const userRoutes = require("./routes/user.routes.js");
const adminRoutes = require("./routes/admin.routes.js");

const app = express();

// Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use(`/`, publicRoutes);
app.use(`/admin`, adminRoutes);
app.use(`/user`, userRoutes);

// Methods

// Connect DB && starting server...
connectDB();
