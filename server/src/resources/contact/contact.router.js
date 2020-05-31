const router = require('express').Router();
const controller = require('./contact.controller');

router.route('/')
        .get(controller.getMany);
        .post(controller.createOne);
