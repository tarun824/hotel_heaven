const checkCoupanValidationController=async (req,res)=>{
    const {coupanCode}=req.body;
    if(coupanCode==null){
        res.send({statusCode:0,message:"One or more field is empty"});
        return;
    }
        let coupanUsed=await Coupan.findOne({name:coupanCode});
        if(!coupanUsed){
            //coupan code is not present
            res.send({statusCode:0,message:"Coupan code Not found"});
            return;
        }
        if(coupanUsed["used_by"].length>=coupanUsed["no_of_times_use"]){
            ///Coupan has been used maximun limit
            res.send({statusCode:0,message:"Coupan code has been used at Max"});
            return;
        }
        if(coupanUsed["expire_time"]<Date.now()){
            ///Coupan has been used maximun limit
            res.send({statusCode:0,message:"Coupan code has expired"});
            return;
        }
        res.send({statusCode:1,message:"Coupan code is valid"});

}
export default checkCoupanValidationController;