import { Otp } from "../../main.js";

const verifyOtpCustomerController=async(req,res)=>{
    const {customerDetails,otp}=req.body;
    if(customerDetails!=null &&otp!=null){
        let customer=await Otp.findOne({userDetails:customerDetails,otp:otp});
        if(customer){
            res.send({statusCode:1,message:"OTP verified successfully"});
            return;
        }
            
        res.send({statusCode:0,message:"Wrong details"})
        
    }else{
        res.send({statusCode:0,message:"One or more fields are empty"})
    }
    
}
export default verifyOtpCustomerController;