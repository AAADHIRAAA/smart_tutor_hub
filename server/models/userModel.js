const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    userId:String,
    userName:String,
    bloodGroup:String,
    gender:String,
    phone:Number,
    permanentAddress:String,
    currentAddress:String,

        
    
});



const User = mongoose.model('User', userSchema);

module.exports = User;