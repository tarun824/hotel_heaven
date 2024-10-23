import express  from 'express';
import adminSignupController from '../controller/admin_signup_controller.js';
import adminSigninController from '../controller/admin_signin_controller.js';
const adminAuthRouter = express.Router();

adminAuthRouter.post("/signup",adminSignupController);
adminAuthRouter.get("/signin",adminSigninController);

export default adminAuthRouter;