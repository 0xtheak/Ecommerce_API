const Models = require('../modals/product');

//product response
module.exports.products = async function(req, res){
    try{

        // selecting only id, name, quantity field
        let product = await Models.Product.find({}, {id : 1, name: 1, quantity : 1, _id : 0});
        if(product){
            return res.status(200).json({
                data : {
                   product,
                }
            })
        }

    }catch(err){
        if(err){
            console.log(`error in retreving products ${err}`);
            return res.status(400).json({
                message : "failure in data find "
            })
        }
    }
}

// product create
module.exports.create = async function(req, res){
    try{
        if(req.body.name == undefined || req.body.quantity==undefined){
            return res.status(400).json({
                message : "parameter missing"
            })
        }
        // product quantity must be greater than while creating
        if(req.body.quantity>0){
            
            let product = await Models.Product.findOne({name : req.body.name});
            if(!product){
                let cd = await Models.countermodel.findOneAndUpdate(
                    {id : "autoval"},
                    {"$inc" : {"seq" : 1}},
                    {
                        new : true
                    }
                )
                let seqId;
                if(cd == null){
                    const newval = await Models.countermodel.create({id : "autoval", seq: 1});
                    seqId=1;
                }else {
                    seqId=cd.seq;
    
                }
                let productData = await Models.Product.create({
                    id : seqId, //automatic increment id
                    name : req.body.name,
                    quantity : req.body.quantity
                });

                return res.status(200).json({
                    data : {
                        product : {
                            name : productData.name,
                            quantity : productData.quantity
                        }
                    }
                })
        }else {
            return res.status(400).json({
                message : "This data is already present the database"
            });
        }
    }else {
        return res.status(400).json({
            Message : "Quantity cant't be zero or less than"
        });
    }

    }catch(err){
        if(err){
            console.log(`error in creating products ${err}`);
            return res.status(400).json({
                message : "failed to create data"
            })
        }
    }
}


// delete product with their respective id
module.exports.delete = async function(req, res){

    try{
        let product = await Models.Product.findOneAndDelete(req.body.id);
        // delete product if it's present in the database
        if(product!=null){
            return res.status(200).json({
                data :{
                    message : "product deleted"
                }  
            });
        }else {
            return res.status(200).json({
                message : "Product is not in the data with this crossponding id"
            })
        }
        
        
    }catch(err){
        if(err){
            console.log(`error in deleting products ${err}`);
            return res.status(400).json({
                message : "unable to delete data"
            })
        }
    }
    
}

// update the product quantity
module.exports.modify = async function(req, res){
    try{
        // quantity can't be negative
        if(req.query.number<0){
            return res.status(400).json({
                message : "Quantity can't be less than zero"
            })
        }

        let product = await Models.Product.findOneAndUpdate(
            { id: req.params.id }, // selecting filter criteria
            { $set: { quantity: req.query.number } }, // Update operation
            { returnOriginal: false } // return updated data
        );
        
        return res.status(200).json({
            data : {
                product : {
                    id : product.id,
                    name : product.name,
                    quantity : product.quantity
                },
            },
            message : "Updated Successfully"
        })
        
    }catch(err){
        if(err){
            console.log(`error in modifying products ${err}`);
            return res.status(400).json({
                message : "failed! unable to update the quantity of the product "
            })
        }
    }

}