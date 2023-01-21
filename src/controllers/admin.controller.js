import adminService from "../services/admin.service.js";

const create = async (req, res) => {
    try {
        const admin = await adminService.createService(req.body);

        if (!admin) {
            res.status(400).send({ message: "Error submitting the form" });
        }

        res.status(201).send({
            message: "successfully registered admin",
            admin: {
                id: admin._id,
                email: admin.email
            }
        })
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

export default { create }