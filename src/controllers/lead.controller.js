const leadService = require("../services/lead.service");

const create = async (req, res) => {
    const { name, phone, project_description, reference } = req.body;
    if(!name || !phone || !project_description){
        res.status(400).send({message: "Please fill in the mandatory fields"});
    }

    const lead = await leadService.createService(req.body);

    if(!lead){
        res.status(400).send({message: "Error submitting the form"});
    }

    res.status(201).send({
        message: "successfully registered form",
        lead: {
            id: lead._id,
            name,
            phone,
            project_description,
            reference
        }
    })
}

module.exports = {
    create
}