const mongoose = require('mongoose')
const productsSchema = new mongoose.Schema({
    productName: String, // String is shorthand for {type: String}
    productCategory: String,
    productDescription: String,
    productPrice: Number
});

const Products = mongoose.model('Products', productsSchema);
module.exports = Products