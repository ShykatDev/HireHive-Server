const express = require("express");
const publicControllers = require("../controllers/public.controller.js");

const router = express.Router();

router.get(`/`, publicControllers.home);

module.exports = router;
