import express, { urlencoded } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./database/connectDB.js";

dotenv.config({ path: "./.env" })

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json()); // we will get  data in json format
app.use(urlencoded({ extended: true })); // encode url
app.use(cookieParser()); // if we dont use it we will send data  to frontend in cookie format it will not get parse
app.use(
  cors({
    origin: ["http://localhost:5173"], // local host of react vite
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


// one route to get all userroutes
import userRouter from "./routes/user_route.js"
import companyRouter from "./routes/company_route.js"
import jobRouter from "./routes/job_route.js"
import applicationRouter from "./routes/application_route.js"
app.use("/api/users",userRouter)
app.use("/api/company",companyRouter)
app.use("/api/jobs",jobRouter)
app.use("/api/applications",applicationRouter)

app.listen(port, () => {
  connectDB()
  console.log(`server is running on port ${port}`);
});



