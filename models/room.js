import mongoose from 'mongoose';
const roomSchema=new mongoose.Schema({
    room_no:String,
    // room_type will be like 
    /**
     * 1->Family Room
     * 2->Deluxe Room
     */
    room_type:{
        type:Number,
        enum:[1,2]   
     },
    isAC:Boolean,
    no_of_beds:Number,
    price:Number,
    current_assigned:{type:mongoose.Schema.Types.ObjectId,ref:"Customer"},
    ///freeOn will say from which time room will be free
    freeOn:Date

})
export default roomSchema;