const express = require('express');
const env = require('./config/enviroment');
const logger = require('morgan');
const db = require('./config/mongoose');
const app = express();

app.use(express.urlencoded({extended : true}));

app.use(logger(env.morgan.mode, env.morgan.options));

// product api routes
app.use('/', require('./routes'));

// listening the api server on 5000
app.listen(5000, function(err){
    if(err){
        console.log('failed to start');
    }
    console.log('server has been started on port 5000');
})