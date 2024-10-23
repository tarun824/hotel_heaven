import mongoose from "mongoose";

const customerSchema=new mongoose.Schema({
        name:String,
        ph_number:String,       
        dob:Date,
        aadhar_no:String,
        orders_history:[{type:mongoose.Schema.Types.ObjectId,ref:"Booking"}],
        wallet:{
                type:Number,
                default:0
        },
        coupans:[{type:mongoose.Schema.Types.ObjectId,ref:"Coupan"}]
     });
export default customerSchema;