import mongoose, { model, Schema } from "mongoose";
// people applying for job

const applicationSchema= new Schema({
        // create relation between application and job
        job:{ // ye apan ko  batae ga application kaun si job ki hai
            type: Schema.Types.ObjectId,
            ref: 'Job',
        required:true    
        },
        // create relation between application and user
        applicant:{ // ye apan ko jis ne apply kiya hai vo batae ga
            type: Schema.Types.ObjectId,
            ref: 'User',
            required:true
        },
        status:{
           type:String,
           enum: ['pending', 'approved', 'rejected'],
       default:'pending'
        }
        }
,{
    timestamps:true
})
export const Application=model("Application",applicationSchema)