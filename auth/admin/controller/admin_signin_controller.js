import { Admin } from "../../../main.js";
import emailValidate from "../../../utils/email_validate.js";
import { generateToken } from "../../../utils/jwt_token.js";

const adminSigninController=async (req,res)=> {
    const {email,password}=req.body;
    if(email!=null&&password!=null){
        if(!emailValidate(email)){
            res.send({statusCode:0,message:"Enter a valid Email ID"});
        }
      let admin= await Admin.findOne({email:email,password:password});
      if(admin){
        res.send({statusCode:1,data:{token:generateToken(email,password)}});
      }else{
        res.send({statusCode:0,message:"Please Enter a valid details"});
      }
    }else{
        res.send({statusCode:0,message:"One or more fields are empty"});
    }
}
export default adminSigninController;
