import {createService} from "../services/admin.service.js";

const handleError = (res, err) => {
    return res.status(500).json({ message: err.message });
};

const create = async (req, res) => {
    try {
        const admin = await createService(req.body);

        if (!admin) {
            return res.status(400).json({ message: "Error submitting the form" });
        }

        const { _id, email } = admin;
        
        return res.status(201).json({
            message: "Successfully registered admin",
            admin: { id: _id, email }
        });
    } catch (err) {
        handleError(res, err);
    }
};

export default { create };
