import { Customer, Otp } from "../../../main.js";

const signupCustomerByStaffController=async (req,res)=>{
    const {name,ph_number,aadhar_no}=req.body;
    if(name!=null&&ph_number!=null&&aadhar_no!=null){
        ///TODO: do better check for validation that user is verfified
        let otpcheck=await Otp.findOne({userDetails:ph_number});
        if(!otpcheck){
            res.send({statusCode:0,message:"Phone number not Verified"});
            return;
        }
        let isCustomerPresent=await Customer.findOne({ph_number :ph_number});
        if(isCustomerPresent){
            res.send({statusCode:0,message:"Customer already found please use other data"});
            return;
        }
        let isCustomerPresentWithAadar=await Customer.findOne({aadhar_no :aadhar_no});
        if(isCustomerPresentWithAadar){
            res.send({statusCode:0,message:"Customer already found please use other data"});
            return;
        }
        

        let customer;
            customer =new Customer({
                name:name,
                ph_number:ph_number,
                aadhar_no:aadhar_no,
                orders_history:[],
                wallet:0,
                ///TODO:create a second time offer and add coupan here
                coupans:[]
            });
        
      await customer.save();
        res.send({statusCode:1,message:"Customer Account created"});
    }else{
        res.send({statusCode:0,message:"One or more fields are empty"});
    }
}
export default signupCustomerByStaffController; 