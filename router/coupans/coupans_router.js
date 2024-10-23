import express from "express";
import coupanValue from '../../controller/coupans/coupan_value_controller.js';
import checkCoupanValidationController from "../../controller/coupans/check_coupan_validation_controller.js";
import createCoupanController from "../../controller/coupans/create_coupan_controller.js";
const coupanRoute = express.Router();

coupanRoute.get("/coupanValue",coupanValue);
coupanRoute.get("/createCoupan",createCoupanController);
coupanRoute.get("/checkCoupanValidation",checkCoupanValidationController);

export default coupanRoute;