const contactPage = require('./contact.model');
const crudController = require('../../utils/crud');

module.exports = crudController(contactPage);
