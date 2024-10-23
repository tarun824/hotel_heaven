import  express from 'express';
import sendOtpForVerifyCustomerController from './../../controller/customer/send_otp_for_verify_customer_controller.js';
import verifyOtpCustomerController from '../../controller/customer/verify_otp_customer_controller.js';

const otpCustomerRouter=express.Router();

otpCustomerRouter.get("/sendOtp",sendOtpForVerifyCustomerController);
otpCustomerRouter.get("/verifyOtp",verifyOtpCustomerController);
export default otpCustomerRouter;
