const {Schema, model} = require('mongoose');

const aboutSchema = new Schema({
    profilePic: String,
    description: {
        type: String,
        required: true
    },
    highlights: [
            {
                icon: {
                    type: String,
                },
                head: {
                    type: String,
                    required: true,
                },
                highlightDesc: {
                    type: String,
                    required: true
                }
            }
    ]
},{timestamps : true});

const aboutPage = model('aboutSchema',aboutSchema);

module.exports = aboutPage;
