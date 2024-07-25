const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller.js");

router.post(`/register`, userController.register);
router.get(`/login`, userController.login);
router.get(`/profile`, userController.userProfile);
router.get(`/edit-profile`, userController.userEditProfile);
router.get(`/applications`, userController.applications);

module.exports = router;
