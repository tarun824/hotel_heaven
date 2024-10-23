import express from 'express';
import checkAvailabilityController from '../../controller/rooms/check_availability_controller.js';
import singleRoomDetailsController from '../../controller/rooms/single_room_details_controller.js';
import createBookingController from '../../controller/rooms/create_booking_controller.js';
import checkOutRoomController from '../../controller/rooms/check_out_room_controller.js';
const roomsRouter=express.Router();

roomsRouter.get("/checkAvailability",checkAvailabilityController)
roomsRouter.get("/singleRoomDetails/:roomNumber",singleRoomDetailsController)
roomsRouter.post("/createBooking",createBookingController);
roomsRouter.post("/checkOutRoom/:roomNumber",checkOutRoomController);


export default roomsRouter;