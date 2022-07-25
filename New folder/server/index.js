let express=require('express');
let loginRouter=require('./router/loginRouter');
let bodyparser=require('body-parser')
let app=express();
app.use(bodyparser.json());
let db=require("./config/dbConfig");
db.dbConnection;
app.post("",loginRouter);

app.get("/RRR",(req,res)=>
{
    console.log("RRR");
    res.send("RRR")
})
app.listen(9090,()=>{console.log("application running on 9090")})
