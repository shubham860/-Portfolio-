const {Router} = require('express');
const {profile, updateProfile} = require('./user.controller');

const router = Router();

router
    .get('/profile',profile)
    .put('/updateProfile',updateProfile);

module.exports = {router};
