const express=require("express");
const {UserModel}=require("../model/User.model");

const userRouter=express.Router();




userRouter.post("/openaccount",async(req,res)=>{
    try{
        let payload=req.body;
      let user=new UserModel(payload);
      user.save();
      res.send(user);
    }

    catch(err){
       res.send(err.message);
    }


})

userRouter.get("/",async(req,res)=>{
    try{
        
      users= await UserModel.find().maxTimeMS(30000);;
      res.send(users);
    }

    catch(err){
       res.send(err.message);
    }


})

userRouter.put("/update/:id",async(req,res)=>{
    try{
    let id=req.params.id;
    let payload=req.body;
      users= await UserModel.findByIdAndUpdate(id,payload,{new:true});
      res.send(users);
    }

    catch(err){
       res.send(err.message);
    }


})

userRouter.patch("/deposit/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const amount = req.query.amount;
      const updatedUser = await UserModel.findByIdAndUpdate(id, { $inc: { initialBalance: amount } }, { new: true });
      res.send(updatedUser);
    } catch (err) {
      res.send(err.message);
    }
  });

  userRouter.patch("/withdraw/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const amount = req.query.amount;
      const updatedUser = await UserModel.findByIdAndUpdate(id, { $inc: { initialBalance: -amount } }, { new: true });
      res.send(updatedUser);
    } catch (err) {
      res.send(err.message);
    }
  });
  


module.exports={
    userRouter
}