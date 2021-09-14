const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();
app.use(cors())
app.use(morgan)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
/*app.use(bodyParser.urlencoded({extends:false}))
app.use(bodyParser.json())*/


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