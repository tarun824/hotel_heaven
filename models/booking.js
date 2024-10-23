import mongoose from "mongoose";

const bookingSchema=new mongoose.Schema({
        room_no:String,
        booked_by:String,
        coupan:String,
        standard_price:Number,
        total_price:Number,
        in_time:Date,
        out_time:Date,
        customer_Id:{type:mongoose.Schema.Types.ObjectId,ref:"Customer"},
        payment_type:{
                type:String,
                enum:['online','cash'],
                default:"cash"
        },
        payment_id:String,
});
export default bookingSchema;