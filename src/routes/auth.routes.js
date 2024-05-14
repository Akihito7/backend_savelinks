const { Router } = require("express");
const authController = new (require("../controllers/authController"))();

const authRoutes = Router();

authRoutes.post("/signup", authController.signup);
authRoutes.post("/signln", authController.signln);

module.exports = authRoutes;