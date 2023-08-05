const products = require('../models/products')
const addNewProducts = async(req,res)=>{

   console.log(req.body)
   await products.create(req.body)
    res.json({
    msg: 'success'
    })
   }
   const getallproducts = async(req,res)=>{
    const data = await products.find()
    if(data){
    res.json({
        data,
    msg: 'success'
    })
   }
}

   module.exports={addNewProducts,getallproducts}