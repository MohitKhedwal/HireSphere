import { Job } from "../models/job_model.js";
import apiResponse from "../utilites/apiResponse.js";

const jobPost = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobtype,
      experience,
      postion,
      opening,
    //   companyName,
      companyId,
    } = req.body;
    const userId = req.id;

    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobtype ||
      !experience ||
      !postion ||
      !opening ||
    //   !companyName ||
      !companyId||
      !userId
    ) {
      return res.status(400).json(
        new apiResponse({
          status: 400,
          message: "Please fill all the fieldss",
          data: null,
          success: false,
        })
      );
    }
    const job = await Job.create({
      title: title,
      description: description,
      experience: experience,
      requirements: requirements.split(","),
      salary: salary,
      location: location,
      jobType: jobtype,
      postion: postion,
      opening,
    //   companyName: companyName,
      companyId: companyId,
      createdBy: userId,
    });
    return res.status(201).json({
      status: 201,
      message: "Job Create Successfully",
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      status: 400,
      message: "Something went wrong in Create Job",
      data: null,
      success: false,
    });
  }
};

const getAllJob = async (req, res) => {
  try {
    const keyword = req.query.keyword || ""; // helps to filter job in URL
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
        { requirements: { $regex: keyword, $options: "i" } },
      ],
    };
    const jobs = await Job.find(query).populate({
        path:'companyId'
    }).sort({
        createdAt: -1
    });
    if (!jobs) {
      return res.status(404).json(
        new apiResponse({
          status: 404,
          message: "Cant find job",
          success: false,
        })
      );
    }
    return res.status(200).json(
      new apiResponse({
        status: 200,
        message: "Jobs found",
        data: jobs,
        success: true,
      })
    );
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      status: 400,
      message: "Something went wrong in get ALL JOB",
      data: null,
      success: false,
    });
  }
};
const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json(
        new apiResponse({
          status: 404,
          message: "Cant find job",
          success: false,
        })
      );
    }
    return res.status(201).json(
        new apiResponse({
          status: 201,
          message: "  job found",
          success: false,
          data:job
        })
      );
  } catch (error) {
    console.log(error);
    return res.status(400).json(
      new apiResponse({
        status: 400,
        message: "Something went wrong in get JOB BY ID",
        data: error,
        success: false,
      })
    );
  }
};

const getJobbyAdmin = async (req,res) => {
  try {
    const adminId = req.id;
    const jobs = await Job.find({ createdBy: adminId });
    if (!jobs) {
      return res.status(404).json(
        new apiResponse({
          status: 404,
          message: "No job Found",
        })
      );
    }
    return res.status(200).json(
      new apiResponse({
        status: 200,
        message: "Jobs found",
        data: jobs,
        success: true,
      })
    );
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      status: 400,
      message: "Something went wrong in get JOB BY ADMIN",
      data: error,
      success: false,
    });
  }
};
export { jobPost, getAllJob, getJobById, getJobbyAdmin };
// populate is used to get info about an company ,user by it ids