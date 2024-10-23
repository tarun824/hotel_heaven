import { Room } from "../../main.js";

    const singleRoomDetailsController=async(req,res)=>{
        const roomNumber=req.params.roomNumber ;
        let room=await Room.findOne({room_no:roomNumber});
        if(room){
            res.send({statusCode:1,data:room});
        }else{
            res.send({statusCode:0,message:"Room not found please"})
        }
    }
    export default singleRoomDetailsController;