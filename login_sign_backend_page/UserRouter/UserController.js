const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../model/usertype')
const mongoose = require('mongoose')

const router = express.Router()

router.post('/signup',async (req,res)=>{
    const {UserName, email, password} = req.body
    const hashedpassword =await bcrypt.hash(password,10)

    if (UserName && email && password) {

     const user = await User.findOne({email});
     if (user) {
        res.status(400).json({msg: `User email Already exist ${email}`})
     }else{
        const Userdetails= User({
            UserName,
            email,
            password:hashedpassword
        }) 
       await Userdetails.save()
        res.status(200).json({msg:`SignUp successfully User ${UserName}`})
     }  
    }else{
      res.status(400).json({msg:`please fill the all fields`})
    }

})


router.post('/login',async (req,res)=>{
   const {email, password} = req.body;
   const Userfound = await User.find({email});
   if (Userfound.length===0) {
      res.status(400).json({msg:`User not exist this email ${email}`})
   }else{
      const particularUser = Userfound[0]
      const decrypt =await bcrypt.compare(password,particularUser.password)
      particularUser.password = undefined
      if (decrypt) {
         res.status(200).json({User:particularUser})
      }else{
         res.status(400).json({msg:`Invalid Password ${password}`})
      }

   }
})

module.exports = router