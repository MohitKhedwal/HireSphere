import mongoose, { Schema } from "mongoose";

const adminSchema=Schema({
    fullname: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$ /,
      },
      password: {
        type: String,
        required: true,
        unique: true,
        match:/^(?=.*[A-Z])(?=.*\d{2,})(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/
      },
      phoneno: {
        type: Number,
        required: true,
        unique: true,
      },
      photo: {
        type: String, // url to photo
      },
      department:{
        type:String,
      }
},{
    timestamps:true
})