import mongoose from "mongoose";
import userService from "../services/lead.service.js";
import adminService from "../services/admin.service.js";

export const validId = (req, res, next) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Invalid ID" });
    }

    next();
}

export const validUser = async (req, res, next) => {
    const id = req.params.id;
    const lead = await userService.findByIdService(id);

    if (!lead) {
        return res.status(400).send({ message: "Lead not found" });
    }

    next();
}

export const validForm = (req, res, next) => {
    const { name, phone, project_description } = req.body;

    if (!name || !phone || !project_description) {
        return res.status(400).send({ message: "Please fill in the mandatory fields" });
    }

    next();
}

export const validLogin = async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password){
        return res.status(400).send({ message: "Please fill all fields" });
    }

    const admin = await adminService.findByEmailService(email);

    if(admin){
        return res.status(400).send({ message: "This email is already registered" });
    }

    next();
}