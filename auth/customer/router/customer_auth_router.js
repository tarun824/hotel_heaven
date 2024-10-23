import express from "express";
import signupCustomerByStaffController from "../controller/signup_customer_by_staff_controller.js";
import staffMiddleware from "../../../middleware/staff_middleware.js";

const customerAuthRouter=express.Router();

customerAuthRouter.post('/signupByStaff',staffMiddleware,signupCustomerByStaffController);
customerAuthRouter.post('/signupByThemself',signupCustomerByStaffController);

export default customerAuthRouter;