import express from "express";
import staffSigninController from "../controller/staff_signin_controller.js";
const staffSigninRouter=express.Router();

staffSigninRouter.get("/signin",staffSigninController);

export default staffSigninRouter;