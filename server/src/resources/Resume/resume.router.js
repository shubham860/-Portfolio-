const router = require('express').Router();
const controllers = require('./resume.controller');


router.route('/')
            .get(controllers.getMany)
            .post(controllers.createOne);

router.route('/:id')
    .put(controllers.updateOne)
    .delete(controllers.removeOne);

module.exports = router;
