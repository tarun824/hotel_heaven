import { Staff } from "../main.js";
import { verifyToken } from "../utils/jwt_token.js";

const staffMiddleware=async (req,res,next)=>{
    const token = req.headers.token;
    if(!token){
        res.status(403).send({statusCode:0,message:"Please Login"})
    }
    try{
        let {email,password}=verifyToken(token);
        let staff= await Staff.findOne({staff_id:email,password:password});
        if(staff){
            req.user=staff;
            next();
        }else{
            res.status(403).send({statusCode:0,message:"Please Login"})
        }
    }
    catch(e){
        res.status(403).send({statusCode:0,message:"Please Login"})

    }
}
export default staffMiddleware;