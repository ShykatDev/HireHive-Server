const express = require("express");
const adminController = require("../controllers/admin.controller.js");

const router = express.Router();

router.get(`/register`, adminController.register);

module.exports = router;
