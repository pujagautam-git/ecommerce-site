const mongoose = require('mongoose')
const productsSchema = new mongoose.Schema({
    productIds:Array,
    userId:Number,
});

const Products = mongoose.model('Products', productsSchema);
module.exports = Products