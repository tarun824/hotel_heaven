import mongoose from "mongoose";
const coupanSchema=new mongoose.Schema({
    name:String,
    expire_time:Date,
    no_of_times_use:Number,
    //[value] is in percentage like 0.3, 0.4
    value:Number,
    used_by:[String]
  });
export default coupanSchema;