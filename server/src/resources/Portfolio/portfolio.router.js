const router = require('express').Router();
const controller = require('./portfolio.controller');


router.route('/')
    .get(controller.getMany)
    .post(controller.createOne);

router.route('/:id')
    .get(controller.getOne)
    .put(controller.updateOne)
    .delete(controller.removeOne);

module.exports = router;

