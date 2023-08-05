const mongoose = require('mongoose')
const productsSchema = new mongoose.Schema({
    productName: String, // String is shorthand for {type: String}
    productCategory: String,
    productDescription: String,
    productPrice: Number
});

const products = mongoose.model('products', productsSchema);
module.exports = products