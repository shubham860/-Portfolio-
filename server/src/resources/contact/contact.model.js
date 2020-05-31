const {Schema, model} = require('mongoose');

const contact = new Schema({
    name : {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    }


}, {timestamps: true});

const contactPage  = model('contact', contact);

module.exports = contactPage;
