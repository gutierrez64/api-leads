const route = require("express").Router();
const userController = require("../controllers/lead.controller");

route.post("/", userController.create);

module.exports = route;