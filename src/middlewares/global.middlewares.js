const mongoose = require("mongoose");
const userService = require("../services/lead.service");

const validId = (req, res, next) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Invalid ID" });
    }

    next();
}

const validUser = async (req, res, next) => {
    const id = req.params.id;
    const lead = await userService.findByIdService(id);

    if (!lead) {
        return res.status(400).send({ message: "Lead not found" });
    }

    next();
}

const validForm = (req, res, next) => {
    const { name, phone, project_description } = req.body;

    if (!name || !phone || !project_description) {
        return res.status(400).send({ message: "Please fill in the mandatory fields" });
    }

    next();
}

const validDate = async (req, res, next) => {
    const { day, month, year } = req.params;

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return res.status(400).send({ message: "Please fill in the mandatory fields" });
    }

    next();
}

module.exports = {
    validId,
    validUser,
    validForm,
    validDate
}