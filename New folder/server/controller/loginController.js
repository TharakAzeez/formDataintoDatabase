let repository=require('../repository/loginRepository');
console.log("controller works")

let login=async(req,res)=>
{
    console.log("controller works");
    let client=req.body;
    console.log(client);
    
    try{
        if(Object.keys(client)!=0)
        {

            console.log("client information",client);
            let result=await repository.storeClientInfo(client);
            console.log("result",result)

        }
        else{res.send("please insert the data")}

    }
    catch(Ex){res.send(Ex);}


}
module.exports={login};

