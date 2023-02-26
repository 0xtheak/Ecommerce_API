const express = require('express');
const db = require('./config/mongoose');
const app = express();

app.use(express.urlencoded({extended : true}));

// api routes
app.use('/', require('./routes'));

app.listen(5000, function(err){
    if(err){
        console.log('failed to start');
    }
    console.log('server has been started');
})