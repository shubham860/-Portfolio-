const {Router} = require('express');
const controllers = require('./resume.controller');

const resumeRouter = Router;

resumeRouter.route('/')
            .get(controllers.getMany)
            .post(controllers.createOne);

resumeRouter.route('/:id')
    .put(controllers.updateOne)
    .delete(controllers.removeOne);
