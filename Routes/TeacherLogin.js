const express = require('express');
const router = express.Router();
const  bcrypt = require('bcrypt');
const signDB =require('../Module/LoginDB');
router.post('/login',async (req,res)=>{
    try{
        const check = await signDB.findOne({name:req.body.name});
        if(!check){
            res.send('User name Cannot Found!');
        }
        const isPassword = await bcrypt.compare(req.body.password,check.password);
        if(isPassword){
            res.render('HomePages/teachersHomePage');
            // res.status(200).json('Details Saved Successfully');
        }else{
            res.send('wrong Password!');
        }
    }catch{
        res.send('Wrong Details');
        
    }
})
module.exports = router;


