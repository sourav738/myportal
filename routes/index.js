const express=require('express');
const app=express.Router();
const admin=require('./admin')
app.use('/admin',admin)
module.exports=app
