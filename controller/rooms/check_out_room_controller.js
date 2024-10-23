import { Room } from "../../main.js";

const checkOutRoomController=async(req,res)=>{
    const roomNo=req.params.roomNumber  ;
    if(roomNo==null){
        res.send({statusCode:0,message:"One or more fields are empty"});
        return;
    }
    let room =Room.findOne({room_no:roomNo});
    if(!room){
        res.send({statusCode:0,message:"Room not found"});
        return;
    }
    await Room.updateMany({room_no:roomNo},{$set:{current_assigned:null,freeOn:Date.now()}})
    res.send({sattusCode:1,message:"Update Successfull"});
}
export default checkOutRoomController;