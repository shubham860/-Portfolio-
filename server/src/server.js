const express = require('express');
const { json, urlencoded } = require('body-parser');
const cors  = require('cors');
require('./utils/db');
require('dotenv').config();
const {signIn, signUp, protect} = require('./utils/auth');
const aboutRouter = require('./resources/About/about.router');
const resumeRouter = require('./resources/Resume/resume.router');
const portfolioRouter = require('./resources/Portfolio/portfolio.router');
const contactRouter = require('./resources/contact/contact.router');
const {router} = require('./resources/User/user.router');


const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.post('/signIn',signIn);
app.post('/signUp',signUp);
app.use('/user',protect,router);
app.use('/about',protect,aboutRouter);
app.use('/resume',protect,resumeRouter);
app.use('/portfolio',portfolioRouter);
app.use('/contact',contactRouter);


const start = () => {
    app.listen(3005,() => {
        console.log("server running on http://localhost:3005")
    });
};

module.exports = start;

