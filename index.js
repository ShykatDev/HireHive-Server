// entry point of the backend application

const express = require("express");
const { PORT, BASE } = require("./config.js");
const publicRoutes = require("./routes/public.routes.js");
const userRoutes = require("./routes/user.routes.js");
const adminRoutes = require("./routes/admin.routes.js");

// Middlewares
const app = express();

// Routes
app.use(`/`, publicRoutes);
app.use(`/admin`, adminRoutes);
app.use(`/user`, userRoutes);

// Methods
const startServer = () => {
  console.log(`✅ Server is running on https://localhost:${PORT}`);
};

// starting server...
app.listen(PORT, startServer);
