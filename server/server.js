const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const productRoutes = require("./routes/product")
const userMethods = require("./routes/authentication")

const app = express();

app.use(cors())
app.use(morgan("dev"))

//app.use(bodyParser.json())
app.use(express.json())
//app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: false }))

app.use("/api",productRoutes)
app.use("/api",userMethods)

dotenv.config();

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},err=>{
    if(err){
        console.log(err)
    }else{
        console.log("Connetced to MongoDB ...")
    }
})

app.listen(8080,err=>{
    if(err){
        console.log(err)
    }else{
        console.log("8080 port listen ...")
    }
})