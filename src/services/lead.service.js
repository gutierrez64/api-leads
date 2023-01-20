const Lead = require("../models/Lead");

const createService = (body) => Lead.create(body);

const deleteService = (id) => Lead.findByIdAndDelete(id);

const findAllService = () => Lead.find();

const findByIdService = (id) => Lead.findById(id);

const findByDateService = (day, month, year) => Lead.findOne({ day, month, year });

module.exports = {
    createService,
    deleteService,
    findAllService,
    findByIdService,
    findByDateService
}