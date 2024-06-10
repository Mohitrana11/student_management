const express = require('express');
const router = express.Router();
const available =require('../Module/availableSheet');

router.post('/available',async (req,resp)=>{
    try{
        const data = {
            cse:req.body.cse,
            it:req.body.it,
            me:req.body.me,
            auto:req.body.auto,
            electrical:req.body.electrical,
            electronic:req.body.electronic,
            civil:req.body.civil,
        }
        await available.insertMany([data]);
        resp.render('Counselling/counsellingSave');
    }
    catch(err){
        resp.status(500).send(err);
    }
})


module.exports = router;