import leadService from "../services/lead.service.js";

const handleError = (res, err) => {
    return res.status(500).json({ message: err.message });
};

const create = async (req, res) => {
    try {
        const lead = await leadService.createService(req.body);

        if (!lead) {
            return res.status(400).json({ message: "Error submitting the form" });
        }

        return res.status(201).json({
            message: "Successfully registered form",
            lead: {
                id: lead._id,
                name: lead.name,
                phone: lead.phone,
                project_description: lead.project_description,
                reference: lead.reference,
                day: lead.day,
                month: lead.month,
                year: lead.year
            }
        });
    } catch (err) {
        handleError(res, err);
    }
};

const findByIdAndDelete = async (req, res) => {
    try {
        const id = req.params.id;
        await leadService.deleteService(id);

        return res.status(200).json({ message: "The lead has been successfully deleted" });
    } catch (err) {
        handleError(res, err);
    }
};

const findAll = async (req, res) => {
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

const findById = async (req, res) => {
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

export default {
    create,
    findAll,
    findById,
    findByIdAndDelete
};
