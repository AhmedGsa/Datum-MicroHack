const mongoose = require('mongoose');

const RequestedDataSchema = new mongoose.Schema({
    requesterName: {
        type: String,
        required: [true, "Please provide a name"],
    },
    requesterEmail: {
        type: String,
        required: [true, "Please provide an email"],
    },
    requesterNumber: {
        type: String,
        required: [true, "Please provide a number"],
    },
    companyName: {
        type: String,
        required: [true, "Please provide a company name"],
    },
    title: {
        type: String,
        required: [true, "Please provide a title"],
    },
    desc: {
        type: String,
        required: [true, "Please provide a description"],
    },
    purpose: {
        type: String,
        required: [true, "Please provide a purpose"],
    }
})

module.exports = mongoose.model("RequestedData",RequestedDataSchema);