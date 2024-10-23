import { Application } from "../models/application_model.js";
import { Job } from "../models/job_model.js";
import apiResponse from "../utilites/apiResponse.js";


const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    if (!jobId) {
      return res.json(
        new apiResponse({
          status: 400,
          message: "Fill job id",
          success: false,
        })
      );
    }
    const applied = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    console.log(jobId,userId)
    if (applied) {
      return res.json(
        new apiResponse({
          status: 400,
          message: "Already Appiled",
          success: false,
        })
      );
    }
   
    const job = await Job.findById(jobId);
    if (!job) {
      return res.json(
        new apiResponse({
          status: 400,
          message: "No job exists",
          success: false,
        })
      );
    }
    // create a new application
    const newApplication =await Application.create({
        job: jobId,
        applicant: userId,
    })
    job.applications.push(newApplication._id)
    await job.save()  
    return res.json({
        status: 200,
        message: "Application  successfully Applied",
        success: true,
        data:job
    })

  } catch (error) {
    console.log(error);
    return res.json(
      new apiResponse({
        status: 400,
        message: "Error in apply job",
        success: false,
      })
    );
  }
};

// get applied jobs for user

const getAppliedJobs=async(req,res)=>{
    try {
        const userId=req.id
        console.log("User ID:", userId);
        const applications=await Application.find({
            applicant:userId
        }).sort({createdAt:-1}).populate({
            path:'job', // used to get all details about job
            options:{sort:{
                createdAt:-1
            }},
            populate:{
                path:'companyId', // used to get all details about company
                options:{sort:{
                    createdAt:-1
                }}
            }
        })
        console.log(applications)
        if(!applications || applications.length === 0){
            return res.json({
                status: 404,
                message: "No jobs applied",
                success: false,
            })
        }
      return res.json({
        status: 200,
        message: "Jobs applied successfully",
        success: true,
        data:applications
      })
        

    } catch (error) {
        console.log(error)
        return res.json(
            new apiResponse({
              status: 400,
              message: "Error in get Applied Jobs",
              success: false,
            })
          );

    }
}

//  to see who has applied for jobs

 const getApplicants=async(req,res)=>{
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:'applications',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'applicant'
            }
        });
        if(!job){
            return res.status(404).json({
                message:'Job not found.',
                success:false
            })
        };
        return res.status(200).json({
            job, 
            succees:true
        });
    } catch (error) {
        console.log(error);
        return res.json({
            status:400,
            message:" Error in get applicants",
            success:false
        })
    }
}

const applicationStatus=async(req,res)=>{
    try {
        const {status}=req.body // we are giving th status as admin
        const applicationId=req.params.id
        if(!status){
            return res.json({
                status:400,
                message:"Please provide status",
                success:true
            })
        }
        // find the application by id
        const application= await Application.findById(applicationId)
       if(!application){
            return res.json({
                status:400,
                message:"Application Not Found ",
                success:false
            })
       }
       application.status=status.toLowerCase()
       await application.save()
        
       return res.json({
        status:200,
        message: "Status Updated Successfully",  
        sucess:true,
        data:status
       })


    } catch (error) {
        console.log(error)
        return res.json({
            status:400,
            message:"Error in get Application status",
            success:false
        })
    }
}

export {
applyJob,
applicationStatus,
getApplicants,
getAppliedJobs
}