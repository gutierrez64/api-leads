import Lead from "../models/Lead.js";

const createService = (body) => Lead.create(body);

const deleteService = (id) => Lead.findByIdAndDelete(id);

const findAllService = () => Lead.find();

const findByIdService = (id) => Lead.findById(id);

export default {
    createService,
    deleteService,
    findAllService,
    findByIdService
}