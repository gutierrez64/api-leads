import { Router } from "express";
import { create, findAll, findById, findByIdAndDelete } from "../controllers/lead.controller.js";
import { validId, validUser, validForm } from "../middlewares/global.middlewares.js";

const router = Router();
router.post("/", validForm, create);
router.get("/", findAll);
router.get("/:id", validId, validUser, findById);
router.delete("/:id", validId, validUser, findByIdAndDelete);

export default router;