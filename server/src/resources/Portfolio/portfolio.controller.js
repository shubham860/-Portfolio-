const portfolioPage = require('./portfolio.model');
const crudController = require('../../utils/crud');

module.exports = crudController(portfolioPage);
