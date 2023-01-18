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
    }
})

const Lead = mongoose.model("Lead", LeadSchema);

module.exports = Lead;