const express=require('express');
const app=express();
const router=express.Router();
// exports.test = ((req,res)=>{
//     res.send("success");
// })
exports.test=function(req,res){
    res.send("success");
}
//module.exports=router;  