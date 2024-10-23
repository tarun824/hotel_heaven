import   express  from 'express';
import adminAuthRouter from "./../auth/admin/router/admin_auth_router.js";
import adminAddRoomRoute from "./rooms/admin_rooms_router.js";
import adminMiddleware from "./../middleware/admin_middleware.js";
import otpCustomerRouter from "./../router/customer/otp_customer_router.js";
import staffSigninRouter from './../auth/staff/router/staff_signin_router.js';
import customerAuthRouter from './../auth/customer/router/customer_auth_router.js';
import roomsRouter from './rooms/rooms_router.js';
import addStaffRouter from './staff/add_staff_router.js';
import coupanRoute from './coupans/coupans_router.js';

const mainRouter=express.Router();

///Admin
mainRouter.use("/admin/auth",adminAuthRouter);
mainRouter.use("/admin",adminMiddleware,addStaffRouter);
mainRouter.use("/admin",adminMiddleware,adminAddRoomRoute);

///Customer
mainRouter.use("/customer",otpCustomerRouter);
mainRouter.use("/customer",customerAuthRouter)

///Staff
mainRouter.use("/staff",staffSigninRouter);

///Rooms
mainRouter.use("/room",roomsRouter);

///Coupan
mainRouter.use("/coupan",coupanRoute);


export default mainRouter;