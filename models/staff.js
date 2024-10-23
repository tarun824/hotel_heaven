import mongoose from "mongoose";
const staffSchema=new mongoose.Schema({
    staff_id:{
        type:String,
        required:true
    },
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
    ph_number:Number,
    booking_made:[ String ]
});
export default staffSchema; 