import { OtherDetails, Room } from "../../main.js";

const addRoomController=async (req,res)=>{
    const { roomNo,
        roomType,
        isAcRoom,
        noOfBeds,
        cost } =req.body ;
        if(roomNo!=null&&roomType!=null && isAcRoom!=null&&noOfBeds!=null&&cost!=null){
            let isRoomAlreadyPresent=await Room.findOne({room_no:roomNo});
            if(isRoomAlreadyPresent){
                res.send({statusCode:0,message:"Room number already present"});
                return;
            }
            const new_room=new Room({
            room_no:roomNo,
            room_type:roomType,
            isAC:isAcRoom,
            no_of_beds:noOfBeds,
            price:cost,
            current_assigned:null,
            freeOn:Date.now()
        });
    
        let roomId=await new_room.save();
        await OtherDetails.updateOne({},{$inc:{noOfRooms:1}});
        res.send({statusCode:1,message:"New Room created successfully"});
        }else{
        res.send({statusCode:0,message:"One or more fields are empty"});
        }
}
export default addRoomController;