const express = require("express");
const router = express.Router();
const controller = require("../controllers");
const loginValidation = require("../middleware/loginValidation");

router.post("/login", loginValidation, controller.login);

module.exports = router;
