const express = require('express');
const router = express.Router();
const studentDB =require('../Module/StuRegData');


router.post('/StudentDetails', async (req,res)=>{
    try{
        const data = {
            rollNumber:req.body.rollNumber,
            studentName:req.body.studentName,
            fatherName:req.body.fatherName,
            motherName:req.body.motherName,
            dob:req.body.dob,
            mobileNumber:req.body.mobileNumber,
            aadharNumber:req.body.aadharNumber,
            email:req.body.email,
            branch:req.body.branch,
            year:req.body.year,
            gender:req.body.gender,
            category:req.body.category,
        }
        await studentDB.insertMany([data]);
        res.render('HomePages/home');
    }
    catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;






// const express = require('express');
// const { check, validationResult } = require('express-validator');
// // const bcrypt = require('bcryptjs');
// const User = require('../Module/StuRegData');

// const router = express.Router();

// // @route   POST /register
// // @desc    Register a new user
// // @access  Public
// router.post(
//     '/',
//     [
//         check('rollNumber', 'Please enter a valid 11-digit mobile number').matches(/^\d{11}$/),
//         check('username', 'Username is required').not().isEmpty(),
//         check('fatherName', 'Father Name is required').not().isEmpty(),
//         check('motherName', 'Mother name is required').not().isEmpty(),
//         check('branch', 'Branch is required').not().isEmpty(),
//         check('email', 'Please include a valid email').isEmail(),
//         check('mobileNumber', 'Please enter a valid 10-digit mobile number').matches(/^\d{10}$/),
//         check('aadharNumber', 'Please enter a valid 10-digit mobile number').matches(/^\d{12}$/),
//         check('dob', 'Please enter a valid date of birth').isISO8601().toDate(),
//         check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
//     ],
//     async (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }

//         const { username, email } = req.body;
//         try {
//             let user = await User.findOne({ email });
//             if (user) {
//                 return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
//             }

//             // // Create a new user
//             user = new User({ rollNumber,fatherName,studentName,motherName,dob,mobileNumber,aadharNumber,branch ,year,gender,category ,email});

//             await user.save();

//             // const data = {
//             //             rollNumber:req.body.rollNumber,
//             //             studentName:req.body.studentName,
//             //             fatherName:req.body.fatherName,
//             //             motherName:req.body.motherName,
//             //             dob:req.body.dob,
//             //             mobileNumber:req.body.mobileNumber,
//             //             aadharNumber:req.body.aadharNumber,
//             //             email:req.body.email,
//             //             branch:req.body.branch,
//             //             year:req.body.year,
//             //             gender:req.body.gender,
//             //             category:req.body.category,
//             //         }
                   
//             //         await studentDB.insertMany([data]);
                
//             res.render('HomePages/home');

//             res.status(201).json({ msg: 'User registered successfully' });
//         } catch (err) {
//             console.error(err.message);
//             res.status(500).send('Server error');
//         }
//     }
// );

// module.exports = router;
