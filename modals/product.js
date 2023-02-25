const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id : {
        type : Number,
        // required : true,
        int32: true
    },
    name : {
        type : String,
        required : true
    }, 
    quantity : {
        type : Number,
        required : true,
        int32: true
    }


}, {
    timestamps : true
});

const Product = mongoose.model('Product', productSchema);

const counterSchema = new mongoose.Schema({
    id : {
        type : String
    },
    seq : {
        type : Number
    }
})

  

const countermodel = mongoose.model("counter", counterSchema);
module.exports = {
    Product, 
    countermodel,
};