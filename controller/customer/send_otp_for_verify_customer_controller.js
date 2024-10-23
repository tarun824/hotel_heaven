import { Otp } from "../../main.js";

const sendOtpForVerifyCustomerController=async(req,res)=>{
    const {customerDetails,isEmail}=req.body;
    if(customerDetails!=null && isEmail!=null){
        let newOtp;
        let isOtpAlreadySent= await Otp.findOne({userDetails:customerDetails});
        if(isOtpAlreadySent){
            ///TODO:Again send otp
            let updatedOtp=4321;
            
           await Otp.updateOne({userDetails:customerDetails},{$set:{otp:updatedOtp}});
           res.send({statusCode:1,message:"OTP Sent Again"})
           return;
        }
        if(isEmail==1||isEmail=="1"){
            ///TODO: send otp to email  
            newOtp=1234;
        }else{
            ///TODO: send otp to ph number
            newOtp=1234;
        }
        let sentOtp= new Otp({
            userDetails:customerDetails,
            otp:newOtp,
            createdAt:Date.now()
        });
        sentOtp.save();
        res.send({statusCode:1,message:"OTP Sent"})

    }else{
        res.send({statusCode:0,message:"One or more details is empty"})
    }
}
export default sendOtpForVerifyCustomerController;