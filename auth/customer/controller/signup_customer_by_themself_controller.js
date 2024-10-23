import { Customer } from "../../../main.js";
import { generateToken } from "../../../utils/jwt_token.js";

const signupCustomerByThemselfController=async (req,res)=>{
    const [name,ph_number,dob,aadhar_no]=req.body;
    if(name!=null&&ph_number!=null&&aadhar_no!=null){
        let customer;
        let isCustomerPresent=await Customer.findOne({ph_number :ph_number});
        if(isCustomerPresent){
            res.send({statusCode:0,message:"Customer already found please use other data"});
            return;
        }
        if(dob==null||dob=="null"){
            customer =new Customer({
                name:name,
                ph_number:ph_number,
                aadhar_no:aadhar_no,
                orders_history:[],
                wallet:0,
                ///TODO:create a first time offer and add coupan here
                coupans:[]
            });
        }else{
            customer =new Customer({
                name:name,
                ph_number:ph_number,
                aadhar_no:aadhar_no,
                dob:dob,
                orders_history:[],
                wallet:0,
                ///TODO:create a first time offer and add coupan here
                coupans:[]
            });
        }
        customer.save();
        res.send({statusCode:1,data:{
            token:generateToken(name,ph_number)
        }});
    }else{
        res.send({statusCode:0,message:"One or more fields are empty"});
    }
}
export default signupCustomerByThemselfController; 