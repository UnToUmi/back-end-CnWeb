const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth.controller")

router.post("/sign_up", authController.register);
router.post("/sign_in", authController.login);

module.exports = router
