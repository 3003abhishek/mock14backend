const mongoose=require("mongoose");



let userSchema=mongoose.Schema({
    name:String,
    gender:String,
    email:String,
    dob:String,
    mobile:String,
    address:String,
    initialBalance:Number,
    panNo:String,
    adharNo:String

})

const UserModel=mongoose.model("user",userSchema);

module.exports={
    UserModel
}