const express=require('express')
const router=express.Router()
const {addNewProducts,getallProducts }=require('../controllers/products')
router.post('/products', addNewProducts)
router.get('/products', getallProducts)
module.exports=router