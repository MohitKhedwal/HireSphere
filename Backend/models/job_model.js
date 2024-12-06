import { application } from "express";
import mongoose, { model, Schema } from "mongoose";

const jobSchema= new Schema({
    title:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    experience:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    requirements:[{
        type:String,
        required:true
    }],
    description:{
        type:String,
        required:true
    },
    jobType:{
        type:String,
        required:true,
    },
    opening:{
        type:String,
        required:true
    },
    companyId:{
        type:Schema.Types.ObjectId,
        ref:"Company",
    },
    
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    applications:[ // this will take data from application schema which consist when we will apply for the job
        {
            type:Schema.Types.ObjectId,
            ref:"Application"
        }
    ]

})

export const Job=model("Job",jobSchema)