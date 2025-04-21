const express = require("express");
const router = express.Router();

const users = [
    { username: "alice", age: 25, email: "alice@example.com" },
    { username: "bob", age: 30, email: "bob@example.com" },
    { username: "charlie", age: 28, email: "charlie@example.com" },
  ];

  router.post("/user",async(req,res)=>{
    try{
        const user = await user.create(req.body);
        res.status(201).json({message:"user added",user});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
  });

  router.get("/users",async(req,res)=>{
    try{
        const users = await user.find();
        res.json(users);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
  });

  router.get("/user/:id",async(req,res)=>{
    try{
        const user = await user.findById(req.params.id);
        if(!user) return res.json(404).json({message:"user not found"});
        res.json(user);
    }
    catch(error){
        res.status(501).json({error: error.message});
    }
  });

  router.put("/updateduser/:id",async(req,res)=>{
    try{
        const updateduser = await updateduser.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updateduser) return res.json(404).json({message:"user not found"});
        res.json({message:"user updated",user});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
  });

  router.delete("/deleteduser/:id",async(req,res)=>{
    try{
        const deleteduser = await deleteduser.findByIdAndDelete(req.params.id);
        if(!deleteduser) return res.json(404).json({message:"user not found"});
        res.json({message:"user deleted",user});
    }
    catch(error){
        res.status(501).json({error: error.message});
    }
  });

  module.exports = router;
