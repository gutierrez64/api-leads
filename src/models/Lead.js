import mongoose from "mongoose";

const date = new Date();

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
        required: false
    },
    month: {
        type: Number,
        required: false
    },
    year: {
        type: Number,
        required: false
    }
})

LeadSchema.pre("save", function(){
    this.day = date.getDate();
    this.month = date.getMonth() + 1;
    this.year = date.getFullYear();
})

const Lead = mongoose.model("Lead", LeadSchema);

export default Lead;