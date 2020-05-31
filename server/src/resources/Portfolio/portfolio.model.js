const {Schema, model} = require('mongoose');

const portfolio = new Schema({
    frontendProject: {
        info: {
            picture: {type: String, required: true},
            name: {type: String, required: true},
            link: {type: String, required: true}
        }
    },

    backendProjects: {
        info: {
            picture: {type: String, required: true},
            name: {type: String, required: true},
            link: {type: String, required: true}
        }
    },

    mlProjects: {
        info: {
            picture: {type: String, required: true},
            name: {type: String, required: true},
            link: {type: String, required: true}
        }
    }
},{timestamps: true});

const portfolioPage = model('portfolio', portfolio);

module.exports = portfolioPage;
