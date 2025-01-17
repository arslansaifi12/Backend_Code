const mongoose = require('mongoose')

const userschema = mongoose.Schema({
    UserName:{
        type:String,
        requried : true
    },

    email:{
        type:String,
        requried : true
    },
    password:{
        type:String,
        requried:true
    }
})

const User = mongoose.model('usercollection',userschema);
module.exports = User