import  {Room}  from "../../main.js";

const checkAvailabilityController =async (req,res)=>{
    const {
        roomType,
        isAcRoom,
        noOfBeds,
        cost,
        isAny } =req.body ;
    let allFreeRooms=[];
    if(isAny){

        let allRooms=await Room.find({freeOn:{$lte:Date.now()}});
        // allFreeRooms=allRooms;
        allRooms.map((eachroom)=>{
            allFreeRooms.push(eachroom["room_no"]);
        });
        res.send({statusCode:1,data:allFreeRooms})
        
    }else{
        let allRooms=await Room.find({room_type:roomType,isAC:isAcRoom,no_of_beds:noOfBeds,price:{$lte:cost},freeOn:{$lte:Date.now()}});
        // allFreeRooms=allRooms;
        allRooms.map((eachroom)=>{
            allFreeRooms.push(eachroom["room_no"]);
        });
        res.send({statusCode:1,data:allFreeRooms})
        
    }


};
export default checkAvailabilityController;