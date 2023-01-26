import leadService from "../services/lead.service.js";

const handleError = (res, err) => {
    return res.status(500).json({ message: err.message });
};

export const create = async (req, res) => {
    try {
        const lead = await leadService.createService(req.body);

        if (!lead) {
            return res.status(400).json({ message: "Error submitting the form" });
        }

        const { _id, name, phone, project_description, reference, day, month, year } = lead;

        return res.status(201).json({
            message: "Successfully registered form",
            lead: { _id, name, phone, project_description, reference, day, month, year }
        });
    } catch (err) {
        handleError(res, err);
    }
};

export const findByIdAndDelete = async (req, res) => {
    try {
        const id = req.params.id;
        await leadService.deleteService(id);

        return res.status(200).json({ message: "The lead has been successfully deleted" });
    } catch (err) {
        handleError(res, err);
    }
};

export const findAll = async (req, res) => {
    try {
        const leads = await leadService.findAllService();

        if (!leads) {
            return res.status(404).json({ message: "There are no registered leads" });
        }

        return res.status(200).json(leads);
    } catch (err) {
        handleError(res, err);
    }
};

export const findById = async (req, res) => {
    try {
        const id = req.params.id;
        const lead = await leadService.findByIdService(id);
        if (!lead) {
            return res.status(404).json({ message: "Lead not found" });
        }
        return res.status(200).json(lead);
    } catch (err) {
        handleError(res, err);
    }
};