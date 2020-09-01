const moongoose=require('mongoose');
const mongoose = require('../database');

const{Schema}=mongoose;

const studenSchema =new Schema({
    id:{type:Number,required:true},
    name:{type:String,required:true},
    age:{type:Number,required:true}
});

module.exports=mongoose.model('Student',studenSchema);