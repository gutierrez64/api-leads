const leadService = require("../services/lead.service");

const create = async (req, res) => {
    const lead = await leadService.createService(req.body);

    if(!lead){
        res.status(400).send({message: "Error submitting the form"});
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
}

const findByIdAndDelete = async (req, res) => {
    const id = req.params.id;
    await leadService.deleteService(id);

    res.send({message: "The lead has been successfully deleted"});
}

const findAll = async (req, res) => {
    const leads = await leadService.findAllService();

    if(!leads){
        res.status(400).send({message: "There are no registered leads"});
    }

    res.send(leads);
}

const findById = async (req, res) => {
    const id = req.params.id;
    const lead = await userService.findByIdService(id);

    res.send(lead);
}

module.exports = {
    create,
    findAll,
    findById,
    findByIdAndDelete
}