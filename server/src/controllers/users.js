const Users=require('../models/users')
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');

const registerNewUser = async(req,res)=>{
   const matched= await Users.exists({phoneNumber:req.body.phoneNumber})
   if(matched){
      res.status(409).json({
         msg:'User Already Exists'
   
      })
   }else{
      //encrypt the password
      const hashPassword=await bcrypt.hash(req.body.password,8);
      req.body.password = hashPassword
    await Users.create(req.body)
    res.status(201).json({
      msg:'User created successfully'

   })
   }


}
const loginUser=async(req,res)=>{
  console.log(req.body) 
  const data= await Users.findOne({email:req.body.email})

if(data){
const isMatched = await bcrypt.compare(req.body.password,data.password)
if(isMatched){
// token generating logic
var token = jwt.sign({foo:'bar'},'shhhhh');
   res.json({
      success:true,
      token
   })
}else{
   res.json({
      success:false,
      msg:"Incorrect login credentials"
   })
}
}
else{
   res.json({
      success:false,
      msg:"No User Found"
   })
}
}

   module.exports={registerNewUser,loginUser} 