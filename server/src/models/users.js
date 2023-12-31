const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
 userName: String, // String is shorthand for {type: String}
 address: String,
 email: String,
 password: String,
 phoneNumber: Number
});
 
const Users = mongoose.model('Users', userSchema);
 module.exports=Users