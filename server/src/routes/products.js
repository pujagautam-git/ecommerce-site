const express=require('express')
const router=express.Router()
const {addNewProducts, getallproducts}=require('../controllers/products')
router.post('/products', addNewProducts)
router.get('/products', getallproducts)
module.exports=router