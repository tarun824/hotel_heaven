import { Staff } from "../../../main.js";
import { generateToken } from "../../../utils/jwt_token.js";

const staffSigninController = async (req,res)=>{
    ///Staff has 2 options to login 
    ///1- through staff ID 
    ///2- email id

    const {staffId ,staffPassword ,isStaffID}=req.body;
    if(staffId!=null&&staffPassword!=null&&isStaffID!=null){
        let staff;
        if(isStaffID==1 || isStaffID=="1"){
    
         staff = await Staff.findOne({staff_id:staffId,password:staffPassword});
        }else
        {
         staff = await Staff.findOne({email:staffId,password:staffPassword});
        }
        if(staff){
            res.send({statusCode:1,data:{
                token:generateToken(staff["staff_id"],staffPassword)
            }});
            return;
        }
        res.send({statusCode:0,message:"Please Enter valid details"});

    }else{
        console.log(staffId+staffPassword+isStaffID)
        res.send({statusCode:0,message:'One or more fields are empty'});
    }
};
export default staffSigninController;