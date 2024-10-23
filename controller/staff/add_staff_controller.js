import { OtherDetails, Staff } from "../../main.js";
import emailValidate from "../../utils/email_validate.js";
import { generateToken } from "../../utils/jwt_token.js";

const addStaffController=async (req,res)=>{
    const {name,email,password,ph_number} =req.body;
    
    if(name!=null&&email!=null&& password!=null){
        if(!emailValidate(email)){
            res.send({statusCode:0,message:"Please Enter a valid Email Id"});
            return;
        }
        let isStaffAlreadyPresent=await Staff.findOne({email:email});
        if(isStaffAlreadyPresent){
            res.send({statusCodeL:0,message:"Email Already exist"});
            return;
        }
        let otherDetail=await OtherDetails.findOne({});
        await OtherDetails.updateOne({},{$inc:{noOfStaff:1}});
        let staff_id="STF"+(otherDetail["noOfStaff"]+1).toString();
        let newStaff=new Staff({
            staff_id:staff_id,
            name:name,
            email:email,
            password:password,
            ph_number:ph_number,
            booking_made:[]
        });
        newStaff.save();
        res.send({statusCode:1,data:{
            token:generateToken(staff_id,password)
        }})
    }else{
        res.send({statusCode:0,message:"One or more fields are empty"});
    }
}
export default addStaffController;