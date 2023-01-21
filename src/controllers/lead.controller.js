import leadService from "../services/lead.service.js";

const create = async (req, res) => {
    try {
        const lead = await leadService.createService(req.body);

        if (!lead) {
            res.status(400).send({ message: "Error submitting the form" });
        }

        res.status(201).send({
            message: "successfully registered form",
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
        })
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const findByIdAndDelete = async (req, res) => {
    try {
        const id = req.params.id;
        await leadService.deleteService(id);

        res.send({ message: "The lead has been successfully deleted" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const findAll = async (req, res) => {
    try {
        const leads = await leadService.findAllService();

        if (!leads) {
            res.status(400).send({ message: "There are no registered leads" });
        }

        res.send(leads);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

const findById = async (req, res) => {
    try {
        const id = req.params.id;
        const lead = await leadService.findByIdService(id);

        res.send(lead);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

export default {
    create,
    findAll,
    findById,
    findByIdAndDelete
}