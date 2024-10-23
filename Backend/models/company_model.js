import mongoose, { model, Schema } from "mongoose";

const companySchema= new Schema({
      name:{
        type:String,
        required:true,
        unique:true
      },
      description:{
        type:String,
      },
        logo:{
     type:String,
        },
        email:{
          type:String,
          required:true,
          unique:true
        },
        password:{
          type:String,
          required:true
        },
        website:{
            type:String,
        },
        location:{
          type:String,
        },
        userId:{
            type:Schema.Types.ObjectId,
            ref:"User",
            required:true
        }    
},{
    timestamps:true
})

export const Company= model("Company",companySchema)