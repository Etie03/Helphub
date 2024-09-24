const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    type: { type: String, required: true },
    // Remove contactInfo if it's not needed
    // contactInfo: { type: String, required: false } // Optional field if you want to keep it
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;