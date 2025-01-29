const { default: mongoose } = require("mongoose");


const ProductSchema = new mongoose.Schema({
    title:{
        type:String
    },
    price:{
        type:Number
    },
    category:{
        type:String
    },
    inStock:{
        type:Boolean
    },
    category:{
        type:String,
    }
})
//Its create the product collection with schema if its not present then its create the new collection name and insert the data. 
const ProductModel = mongoose.models.Product || mongoose.models("Product",ProductSchema)

module.exports = ProductModel;