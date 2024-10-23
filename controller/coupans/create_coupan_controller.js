const createCoupanController=async (req,res)=>{
    const {name,expireTime,noOfTimes,value}=req.body;
    if(name!=null||expireTime!=null||noOfTimes!=null||value!=null){
        res.send({statusCode:0,message:"One or more fields are empty"});
        return;
    }
    let isCoupanPresent=await Coupan.findOne({name:name});
    if(isCoupanPresent){
        res.send({statusCode:0,message:"Coupan Name alredy present"});
        return;
    }
    let newCoupan=new Coupan({
        name:name,
        expire_time:expireTime,
        no_of_times_use:noOfTimes,
        value:value,
        used_by:[]
    });
    await newCoupan.save();
    res.send({statusCode:1,message:"Coupan Created successfully"});
}
export default createCoupanController;