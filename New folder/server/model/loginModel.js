let mongoose=require('mongoose');
let loginSchema=mongoose.Schema({
    Email:String,
    Password:String


});


let loginModel= mongoose.model("login",loginSchema);
module.exports=loginModel;