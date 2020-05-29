const {Schema, model} = require('mongoose');

const resumeSchema = new Schema({

    description: {
        type: String,
        required: true,
        trim: true
    },

    userInfo: {
        name: {
            firstName: {type: String, required: true},
            lastName: {type: String, required: true}
        },
        DOB: Date,
        Address: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        contactNo: {
            type: String,
            required: true
        },
        skypeId: String,
        github: String
    },

    education : [
        {
            insitutionName: {
                type: String,
                required: true
            },
            course: {
                type: String,
                required: true
            },
            percentage: {
                type: Number,
                required: true
            }
        }
    ],

    skills: [
        {
            name: {type: String, required: true},
            rate: {type: Number, required: true},
        }
    ],

    experience: [
        {
            companyName: {type: String, required: true},
            designation: {type: String, required: true},
            startDate: {type: String, required: true},
            endDate: {type: String, required: true},
        }
    ],

    achievements: [
        {
            name: String,
            desc: String
        }
    ],

    certifications: [
        {
            name: {type: String, required: true},
            organisation: {type: String, required: true},
            desc: {type: String, required: true},
            expireDate: {type: String, required: true},
        }
    ],

},{timestamps: true});

const resumePage = model('resumeSchema', resumeSchema);

module.exports = resume;
