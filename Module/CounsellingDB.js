const mongo = require('mongoose');
const validator = require('validator');
mongo.connect('mongodb://0.0.0.0:27017/CollegeDB')
const counsellingSchema = new mongo.Schema({
    studentName:{
        type:String,
        required:true,
    },
    fatherName:{
        type:String,
        required:true,
    },
    motherName:{
        type:String,
        required:true,

    },
    dob:{
        type:String,
        default:Date.now,
        required:true,
    },
    mobileNumber:{
        type:String,
        required:true,
    },
    jeep:{
        type:Number,
        required:true
    },
    firstChoice:{
        type:String,
        required:true
    },
    secondChoice:{
        type:String,
        required:true
    },
    thirdChoice:{
        type:String,
        required:true
    },
    fourthChoice:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    year:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    aadharNumber:{
        type:String,
        required:true,
        unique:true
    },
    state:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
})


const collection = mongo.model('counselling',counsellingSchema);
module.exports = collection;