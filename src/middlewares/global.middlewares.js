import mongoose from "mongoose";
import userService from "../services/lead.service.js";
import adminService from "../services/admin.service.js";
import { loginService } from "../services/auth.service.js";

const isValidId = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
}

const isValidLead = async (id) => {
    const lead = await userService.findByIdService(id);
    return !!lead;
}

const isValidForm = ({ name, phone, project_description }) => {
    return !!name && !!phone && !!project_description;
}

const isValidAdmin = async (email) => {
    const admin = await loginService(email);
    return !admin;
}

export const validId = (req, res, next) => {
    const id = req.params.id;

    if (!isValidId(id)) {
        return res.status(400).send({ message: "Invalid ID" });
    }

    next();
}

export const validUser = async (req, res, next) => {
    const id = req.params.id;
    const isValid = await isValidLead(id);

    if (!isValid) {
        return res.status(400).send({ message: "Lead not found" });
    }

    next();
}

export const validForm = (req, res, next) => {
    const { name, phone, project_description } = req.body;

    if (!isValidForm({ name, phone, project_description })) {
        return res.status(400).send({ message: "Please fill in the mandatory fields" });
    }

    next();
}

export const validLogin = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ message: "Please fill all fields" });
    }

    const isValid = await isValidAdmin(email);

    if (!isValid) {
        return res.status(400).send({ message: "This email is already registered" });
    }

    next();
}