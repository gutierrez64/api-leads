const route = require("express").Router();
const leadController = require("../controllers/lead.controller");
const { validId, validUser, validForm, validDate } = require("../middlewares/global.middlewares");

route.post("/", validForm, leadController.create);
route.get("/", leadController.findAll);
route.get("/:id", validId, validUser, leadController.findById);
route.delete("/:id", validId, validUser, leadController.findByIdAndDelete);
route.get("/:day/:month/:year", validDate, leadController.findByDate);

module.exports = route;