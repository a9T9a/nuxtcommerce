const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    title:String,
    description:{
        type:Array, 
        default:[]
    },
    subCategory:Array
})

module.exports = mongoose.model("Category",CategorySchema)