import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";

const loginService = (email) => Admin.findOne({ email }).select("+password");

const generateToken = (id) =>
    jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: 86400 });

export {
    loginService,
    generateToken
};