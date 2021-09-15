const router = require("express").Router()
const User = require("../models/user")
const verifyToken = require("../middleware/verify-token")
const jsonwebtoken = require("jsonwebtoken")
const { response } = require("express")
const { json } = require("body-parser")

router.post("/authentication/signup",async (req,res)=>{
    if(!req.body.email || !req.body.password){
        response.json({
            success:false,
            message:"check email and password"
        })
    }else{
        try {
            let newUser = new User()
            newUser.name = req.body.name
            newUser.email = req.body.email
            newUser.password = req.body.password
            newUser.phone = req.body.phone
            newUser.address = req.body.address
    
            await newUser.save()
    
            let token = jsonwebtoken.sign(newUser.toJSON(),process.env.SECRET_KEY,{
                expiresIn:31536000
            })
    
            res.json({
                success:true,
                token:token,
                message:"user is created successfully..."
            })
        } catch (error) {
            res.status(500).json({
                success:false,
                message:error.message
            })
        }


    }
})

router.post("/authentication/signin", async (req,res)=>{
    try {
        let anyUser = await User.findOne({email:req.body.email})

        if(!anyUser){
            res.status(403).json({
                success:false,
                message:"user not found..."
            })
        }else{
            if(anyUser.comparePassword(req.body.password)){
                let token = jsonwebtoken.sign(anyUser.toJSON(),process.env.SECRET_KEY,{
                    expiresIn:31536000
                })
            }
            res.json({
                success:true,
                token:token,
                message:"user is sign in successfully... "
            })
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
})

module.exports = router