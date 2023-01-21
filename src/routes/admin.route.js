import express from "express";
const route = express.Router();
import adminController from "../controllers/admin.controller.js";
import { validLogin } from "../middlewares/global.middlewares.js";


route.post("/", validLogin, adminController.create);

export default route;