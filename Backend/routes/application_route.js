import { Router } from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { applicationStatus, applyJob, getApplicants, getAppliedJobs } from "../controllers/application.js";

const router =Router()

router.route("/apply/:id").get(isAuthenticated,applyJob)

router.route("/get").get(isAuthenticated,getAppliedJobs)

router.route("/applicants/:id").get(isAuthenticated,getApplicants)

router.route("/status/:id/update").post(isAuthenticated,applicationStatus)

export default router