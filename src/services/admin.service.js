import Admin from "../models/Admin.js";

const createService = (body) => Admin.create(body);

const findByEmailService = (email) => Admin.findOne({email});

export default {
    createService,
    findByEmailService
}