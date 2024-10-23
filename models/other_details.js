import mongoose from "mongoose";

const otherDetails=new mongoose.Schema({
    ///[noOfStaff] this is there for STA0000noOfStaff for the sequence
    noOfStaff:{
        type:Number,default:0
    },
    noOfRooms:{
        type:Number,default:0
    }
    });
export default otherDetails