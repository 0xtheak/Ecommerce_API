const mongoose = require('mongoose');
const env = require('./enviroment');
mongoose.set('strictQuery', false);
mongoose.connect(`mongodb://127.0.0.1:27017/${env.mongodb}`);

// mongodb connection
const db = mongoose.connection;

db.on("error", console.error.bind(console, "database connection error"));

db.once("open", function(){
    console.log("database connected successfully");
});

module.exports = db;