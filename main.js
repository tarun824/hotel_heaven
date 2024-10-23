import express from "express";
import mongoose from "mongoose";
import roomSchema from './models/room.js';
import customerSchema from './models/customer.js';
import adminSchema from './models/admin.js';
import staffSchema from "./models/staff.js";
import bookingSchema from "./models/booking.js";
import coupanSchema from './models/coupan.js';
import otherDetails from "./models/other_details.js";
import otpSchema from './models/otp.js';
import mainRouter from "./router/main_router.js";
import bodyParser from "body-parser";

const app=express();
const port =3000;

app.use(bodyParser.json());

const Room =mongoose.model("Room",roomSchema);
const Customer=mongoose.model("Customer",customerSchema);
const Admin =mongoose.model("Admin",adminSchema);
const Staff =mongoose.model("Staff",staffSchema);
const Booking =mongoose.model("Booking" ,bookingSchema );
const Coupan= mongoose.model("Coupan",coupanSchema);
const OtherDetails =mongoose.model("OtherDetails",otherDetails);
const Otp =mongoose.model("OTP",otpSchema);

async function init(){
    let isInitialOtherDetailsCreated=await OtherDetails.find({});
    if(!isInitialOtherDetailsCreated){
        let initialOtherDetails=new OtherDetails();
        initialOtherDetails.save();
    }
}
async function databaseConnection() {
    try
        {
      await mongoose.connect("mongodb://127.0.0.1:27017/hotel_heaven");
      console.log("connected to DB");
        }
    catch(e){
     console.log("got error at database connection");
     console.log(e);
    }
}

init();
/// Connecting to Database 
databaseConnection();


app.use("/service/api/v1",mainRouter);

app.listen(port,()=>{
    console.log("Connected to port:"+port);
});
export {Room,Customer,Admin,Staff,Booking,Coupan,OtherDetails,Otp};