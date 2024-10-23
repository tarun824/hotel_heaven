import express from "express";
import addRoomController from "../../controller/rooms/add_room_controller.js";

const adminAddRoomRoute=express.Router();  

adminAddRoomRoute.post("/addRoom",addRoomController);
export default adminAddRoomRoute;