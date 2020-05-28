const {Router} = require('express');
const {profile, updateProfile} = require('./user.controller');

const router = Router();

router
    .get('/profile/:id',profile)
    .put('/updateProfile/:id',updateProfile);

module.exports = {router};
