const Users=require('../models/users')
const bcrypt = require('bcrypt');
const registerNewUser = async(req,res)=>{
   const matched= await Users.exists({phoneNumber:req.body.phoneNumber})
   if(matched){
      res.status(409).json({
         msg:'User Already Exists'
   
      })
   }else{
      const hashPassword=await bcrypt.hash(req.body.password,8);
      req.body.password = hashPassword
    await Users.create(req.body)
    res.status(201).json({
      msg:'User created successfully'

   })
   }


}
   module.exports={registerNewUser} 