//import mongoose 
const mongoose=require('mongoose')


// CMCSS1 create model connections using schema

const facultySchema=new mongoose.Schema({
    rollNo:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    fname:{
        type:String,
        // *require
        required:true,
        // to remove white space backend vailation
        trim:true
    },
    lname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        // to unique email
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    mobile:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        // min length number
        minlength:10,
        // max length number
        maxlength:13
    },
    gender:{
        type: String,
        required:true
        // auto store
    },
    department:{
        type: String,
        required:true,
        trim:true
    },
    profile:{
        type: String,
        required:true
    },
    location:{
        type: String,
        required:true,
        trim:true
    }
})

// model connects MCS2
//collectionName same as atlas   collectionName,schemaName
const facultys=new mongoose.model('facultys',facultySchema)


// exports model MCS3 goto logic.js

module.exports=facultys
