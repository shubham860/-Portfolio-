const router = require('express').Router();
const controller = require('./about.controller');


router.route('/')
    .post(controller.createOne);

router.route('/:id')
    .get(controller.getOne)
    .put(controller.updateOne)
    .delete(controller.removeOne);


module.exports = router;


