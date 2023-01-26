import Admin from "../models/Admin.js";

const createService = (body) => Admin.create(body);

export default { createService }