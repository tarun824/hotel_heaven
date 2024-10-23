import { Admin } from "../main.js";
import { verifyToken } from "../utils/jwt_token.js";

const adminMiddleware= async (req,res,next)=>{
    const token = req.headers.token;
    if(token){
        try{
        const {email,password}=verifyToken(token);
            let admin= await Admin.findOne({email:email,password:password});
            if(admin){
                req.user=admin;
                next();
            }else{
               
                res.status(403).send({statusCode:0,message:"Please login"});
            }
    }
        catch(e){
        res.status(403).send({statusCode:0,message:"Please login"});

        }
      
    }else{
        res.status(403).send({statusCode:0,message:"Please login"});
    }
}
export default adminMiddleware;