const { Router } = require("express");
const ensureAuthentication = require("../middlewares/ensureAuthentication");
const linkController = new(require("../controllers/linkController"))();

const routes = Router();

routes.use(ensureAuthentication)
routes.get("/", linkController.getManyLink);
routes.get("/:idLink", linkController.getUniqueLink);
routes.post("/", linkController.addLink);
routes.put("/:idLink", linkController.updateLink);
routes.delete("/:idLink", linkController.deleteLink);

module.exports = routes;