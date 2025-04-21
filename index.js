const express = require("express");
const app = express();
const router = require("./userController");

const port = 3000;

app.listen(port,async()=>{
    try{
        await 
        console.log(`Server is running on port ${port}`);
    }
    catch(error){
        console.error(error);
    }
});

app.get('/',(req,res)=>{
    res.send("Hello World!");
});
