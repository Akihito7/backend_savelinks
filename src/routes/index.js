const { Router } = require("express");
const authRoutes = require("./auth.routes");
const linkRoutes = require("./link.routes");

const routes = Router();

routes.use("/auth", authRoutes);
routes.use("/link", linkRoutes);

module.exports = routes;