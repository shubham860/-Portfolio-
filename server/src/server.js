const express = require('express');
const bodyParser = require('body-parser');
const cors  = require('cors');
require('./utils/db');

const app = express();

app.use(bodyParser());
app.use(cors());

const start = () => {
    app.listen(3005,() => {
        console.log("server running on http://localhost:3005")
    });
};


module.exports = start;
