const DBConnection = require("../config/db")
const ProductModel = require("../model/ProductModel")

// SOrting: Ascending Order:1,descendingOrder:-1 
//for Price greater {price:{$gt:500}}
//for greater than equal to {price:{$gte:500}}

const getProductsWithCategoryAndPrice  = async(req,res) => {
    await DBConnection()
    const getResults = await ProductModel.find({collection:"Electronics",price:{$gt:500}}).sort({price:-1})
    console.log(getResults)

}

module.exports = getProductsWithCategoryAndPrice;