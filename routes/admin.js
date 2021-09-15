const express=require('express');
const app=express();
const router=express.Router();
const allroutes=require('../controllers/admin')
router.get('/test',allroutes.test)
module.exports=router;  