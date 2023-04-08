const mongoose=require("mongoose");

const connect = async () => {
    try {
      const connection = await mongoose.connect("mongodb+srv://abhishek:abhishek@cluster0.fbx7ael.mongodb.net/bank?retryWrites=true&w=majority");
      console.log("Connected to the database");
      return connection;
    } catch (error) {
      console.error(error);
      
    }
  };









 module.exports={
    connect
 }