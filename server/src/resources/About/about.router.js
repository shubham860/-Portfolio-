const {Router} = require('express');
const controller = require('./about.controller');

const aboutRouter = Router();

aboutRouter.route('/')
    .get(controller.getMany)
    .post(controller.createOne);

aboutRouter.route('/:id')
    .get(controller.getOne)
    .put(controller.updateOne)
    .delete(controller.removeOne);


module.exports = aboutRouter;


