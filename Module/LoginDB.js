const mongo  = require('mongoose');
mongo.connect('mongodb://0.0.0.0:27017/CollegeDB')

const LogInSchema = new mongo.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});
const collection = mongo.model('Login',LogInSchema);
module.exports =collection;