import mongoose from "mongoose";

const adminSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    total_amount:{
        type:Number,
        default:0
    },
    rooms:[{type: mongoose.Schema.Types.ObjectId,ref:"Room"}]
})
export default adminSchema;