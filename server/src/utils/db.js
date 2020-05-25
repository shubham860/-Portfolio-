const {connect} = require('mongoose');

connect('mongodb+srv://shubham:shubham1997@learning-timjr.mongodb.net/portfolioAdminPanel',
    { useNewUrlParser: true, useUnifiedTopology: true } ,
    err => {
            err ? console.log('MongoDB not connected', JSON.parse(err)) :  console.log("mongoDB connected")
});

