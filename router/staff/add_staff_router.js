import express from "express";
import addStaffController from "../../controller/staff/add_staff_controller.js";

const addStaffRouter=express.Router();
addStaffRouter.post("/addStaff",addStaffController);

export default addStaffRouter;