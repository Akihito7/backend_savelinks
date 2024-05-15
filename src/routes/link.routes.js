const { Router } = require("express");
const ensureAuthentication = require("../middlewares/ensureAuthentication");
const linkController = new(require("../controllers/linkController"))();

const routes = Router();

routes.use(ensureAuthentication)
routes.get("/", linkController.getManyLink);

module.exports = routes;