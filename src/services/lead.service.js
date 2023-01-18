const Lead = require("../models/Lead");

const createService = (body) => Lead.create(body)
    .catch(() => undefined);

module.exports = {
    createService
}