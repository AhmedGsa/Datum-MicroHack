const RequestedData = require('../models/requestedData');
const {BadRequest} = require('../errors/index');

const getNbrofRequestedData = async (req, res) => {
    const data = await RequestedData.find();
    res.status(200).json({ data: data.length });
}

const getAllRequestedData = async (req, res) => {
    const data = await RequestedData.find();
    res.status(200).json({ data: data });
}

const addDataRequest = async (req, res) => {
    if(!req.body.requesterName || !req.body.requesterEmail || !req.body.requesterNumber || !req.body.companyName || !req.body.title || !req.body.desc || !req.body.purpose) {
        throw new BadRequest("Please provide all the required fields");
    }
    const data = await RequestedData.create(req.body);
    res.status(201).json({ data: data });
}

module.exports = {
    getNbrofRequestedData,
    getAllRequestedData,
    addDataRequest
}