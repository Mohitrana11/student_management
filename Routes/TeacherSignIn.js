const express = require('express');
const router = express.Router();
const  bcrypt = require('bcrypt');

const signDB =require('../Module/LoginDB');

router.post('/sign',async (req,res)=>{
    try{
        const data = {
            name:req.body.name,
            password:req.body.password
        }
        const userName = await signDB.find({name:req.body.name});
        if(userName==req.body.name){
            res.send('<h1>This User name is already  exist!  </h1>')
        }else{
            const saltRounds = 10;
            const hashPassword = await bcrypt.hash(data.password,saltRounds);
            data.password = hashPassword;
            await signDB.insertMany([data]);
        }
         res.render('HomePages/teachersHomePage');
    }
    catch(err){
        res.status(500).json(err);
    }
})
module.exports = router;