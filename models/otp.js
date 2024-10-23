import mongoose from "mongoose";

const otpSchema =mongoose.Schema({
    userDetails:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
        required:true,
    },
    createdAt:{
        type:Date,
        required:true
    }
});
export default otpSchema;