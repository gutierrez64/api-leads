import mongoose from "mongoose";
import bcrypt from "bcrypt";

const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    }
})

AdminSchema.pre("save", async function(next){
    this.password = await bcrypt.hash(this.password, 10);

    next();
})

const Admin = mongoose.model("Admins", AdminSchema);

export default Admin;