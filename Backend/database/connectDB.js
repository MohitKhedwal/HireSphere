import { config } from "dotenv";
import mongoose from "mongoose";
config({path:"./.env"})

async function connectDB (){
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}`)
  console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)

    }catch(e){
        console.log(`Error connecting to MongoDB: ${e}`)
    }}

    export default connectDB;