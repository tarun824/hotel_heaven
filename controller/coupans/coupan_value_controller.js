import { Coupan } from "../../main.js";

const coupanValue=async(req,res)=>{
    const {coupanName,calculateForValue}=req.body;
    let coupan =await Coupan.findOne({name:coupanName});

    if(coupan==null){
        res.send({
            statusCode:0,
            message:"Coupan Code not Found"
        });
        return;
    }

    if(!((coupan.expire_time>=Date.now())&& coupan.no_of_times_use>0)){
        //Coupan is not valid
        res.send({
            statusCode:0,
            message:"Coupan Code not Valid"});
        return;

    }
    let coupanValue = coupan.value;

    let finalValue = (1-coupanValue) * calculateForValue;

    res.send({
        statusCode : 1,
        data :{
            final_value:finalValue
        }
    });
}
export default coupanValue;