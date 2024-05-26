const mongo = require('mongoose');
mongo.connect('mongodb://0.0.0.0:27017/CollegeDB')

const StudentSchema = new mongo.Schema({
    studentName:{
        type:String,
        required:true
    },
    rollNumber:{
        type:Number,
        required:true
    },
    fatherName:{
        type:String,
        required:true
    },
    motherName:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    mobileNumber:{
        type:String,
        required:true,
    },
    aadharNumber:{
        type:String,
        required:true,
        unique:true
    },
    branch:{
        type:String,
        required:true,
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
    }

});



const collection = mongo.model('StudentDetails',StudentSchema);
module.exports = collection;