import jwt from "jsonwebtoken";
const privateKey="H@tEl+he@VeN";
 function generateToken(email,pass)
    {
    let newToken=jwt.sign({email:email,password:pass},privateKey);
    return newToken;
    }

 function verifyToken(token){
   return jwt.verify(token,privateKey);
    
}

export {generateToken,verifyToken};