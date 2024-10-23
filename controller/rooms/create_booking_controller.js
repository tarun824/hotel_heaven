import { Booking, Coupan, Customer, Room, Staff } from "../../main.js";

const createBookingController=async(req,res)=>{
    const {roomNumber,coupanCode,inTime,outTime,phNumber,paymentType,paymentId,staffBooking}=req.body;
    console.log(roomNumber);
    if(roomNumber==null|inTime==null||outTime==null||phNumber==null||paymentType==null||paymentId==null){
        res.send({statusCode:0,message:"One or more data is empty"});
        return;
    }
    let room = Room.findOne({room_no:roomNumber});
    if(room.freeOn >inTime){
        res.send({statusCode:0,message:"Room is already booked and will be free by"+room.freeOn})
        return;
    }
    let standardPrice=0;
    if(room){   
        standardPrice=room.price;
    }else{
        res.send({statusCode:0,mesage:"Room Not Fould"});
        return;

    }
    let totalPrice = standardPrice;
    if(coupanCode!=null){
        ///user has used some coupan
        let coupanUsed=await Coupan.findOne({name:coupanCode});
        if(!coupanUsed){
            //coupan code is not present
            res.send({statusCode:0,message:"Coupan code Not found"});
            return;
        }
        if((coupanUsed.expire_time>=Date.now())&& coupanUsed.no_of_times_use>0){
            // the coupan has a valid expire time and number of use is still there
            // coupanCode.updateOne()
            // TODO:
            // here add this customer id to that coupan field
            let discountPrice = coupanUsed.value*standardPrice;
            totalPrice = standardPrice-discountPrice;
        }
    }
    let customer =await Customer.findOne({ ph_number:phNumber});
    if(!customer){
        req.send({
            statusCode:0,message:"Customer not found Please signup"
        });
        return;
    }
    
    let customerId=customer._id;

    const new_booking=new Booking({
        room_no:roomNumber,
        coupan:coupanCode,
        standard_price:standardPrice,
        total_price:totalPrice,
        in_time:inTime,
        out_time:outTime,
        customer_Id:customerId,
        payment_type:paymentType,
        payment_id:paymentId,
    });
    let bookingSavedData =await new_booking.save();
    ///Update booking data DB
   await Customer.findByIdAndUpdate( customerId,{$push:{orders_history:bookingSavedData._id}} );
   await Room.updateOne({room_no:roomNumber},{current_assigned:customerId})
   if(staffBooking!=null){
        await Staff.updateOne({staff_id:staffBooking},{$push:{booking_made:bookingSavedData._id}})
    }


    res.send({statusCode:1,message:"Successfully booked a room"});
}

export default createBookingController;
