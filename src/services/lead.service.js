const Lead = require("../models/Lead");

const createService = (body) => Lead.create(body);

const deleteService = (id) => Lead.findByIdAndDelete(id);

const findAllService = () => Lead.find();

const findByIdService = (id) => Lead.findById(id);

module.exports = {
    createService,
    deleteService,
    findAllService,
    findByIdService
}