const express=require("express");
const {connection}=require("./db");
const { userRouter }=require("./routes/User.routes");

let app=express();

app.use(express.json());


app.use("/users",userRouter)




app.listen(8080,async()=>{

    try{
        await connection;
        console.log("Connected to the db");

    }

    catch(err){
     console.log(err.message);
    }
    console.log("Server is running at port 8080");
})