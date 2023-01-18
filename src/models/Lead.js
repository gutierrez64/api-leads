const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    project_description: {
        type: String,
        required: true
    },
    reference: {
        type: String
    },
    day: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
})

const Lead = mongoose.model("Lead", LeadSchema);

module.exports = Lead;