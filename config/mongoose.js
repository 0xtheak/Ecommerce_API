require('dotenv').config()
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGOURL);

// mongodb connection
const db = mongoose.connection;

db.on("error", console.error.bind(console, "database connection error"));

db.once("open", function(){
    console.log("database connected successfully");
});

module.exports = db;