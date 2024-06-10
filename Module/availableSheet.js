const mongo  = require('mongoose');
mongo.connect('mongodb://0.0.0.0:27017/CollegeDB')

const available= new mongo.Schema({
    cse:{
        type:Number,
        required:true,
    },
    it:{
        type:Number,
        required:true
    },
    auto:{
        type:Number,
        required:true,
    },
    me:{
        type:Number,
        required:true
    },
    electrical:{
        type:Number,
        required:true,
    },
    electronic:{
        type:Number,
        required:true
    },
    civil:{
        type:Number,
        required:true,
    }
});
const collection = mongo.model('availableSheet',LogInSchema);
module.exports =collection;