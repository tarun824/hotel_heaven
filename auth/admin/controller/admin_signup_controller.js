import { Admin } from '../../../main.js';
import { generateToken } from '../../../utils/jwt_token.js';
import emailValidate from '../../../utils/email_validate.js';

const adminSignupController =async (req,res)=>{
    const {name,email,pass}=req.body;

    if(name!=null&&email!=null&&pass!=null){
        /// here save the content to DB and send token to user
        if(!emailValidate( email.toString())){
            res.send({statusCode:0,message:"Enter a valid Email ID"});
        }
        if(pass.toString().length<6){
            res.send({statusCode:0,message:"Please Enter password greater than 6"});
        }

        let isAdminPresent=await Admin.findOne({email:email,password:pass});
        if(isAdminPresent){
            res.send({statusCode:0,message:"Admin already found please use other data"});
            return;
        }
        let newAdmin=new Admin({
            name:name.toString(),
            email:email.toString(),
            password:pass.toString(),
            total_amount:0,
            rooms:[]
        });
        newAdmin.save();
        res.send({statusCode:1,data:{
            token:generateToken(email,pass)
        }})
    }else{
        res.send({statusCode:0,message:"One or more fields are null"});
    }

}
export default adminSignupController;   