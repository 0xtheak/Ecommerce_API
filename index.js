const express = require('express');
const db = require('./config/mongoose');
const app = express();

app.use(express.urlencoded({extended : true}));

// product api routes
app.use('/', require('./routes'));

// listening the api server on 5000
app.listen(5000, function(err){
    if(err){
        console.log('failed to start');
    }
    console.log('server has been started on port 5000');
})