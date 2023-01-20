import express from "express";
const route = express.Router();
import leadController from "../controllers/lead.controller.js";
import { validId, validUser, validForm } from "../middlewares/global.middlewares.js";


route.post("/", validForm, leadController.create);
route.get("/", leadController.findAll);
route.get("/:id", validId, validUser, leadController.findById);
route.delete("/:id", validId, validUser, leadController.findByIdAndDelete);

export default route;