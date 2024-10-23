import { Router } from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import {
  getAllJob,
  getJobbyAdmin,
  getJobById,
  jobPost,
} from "../controllers/job.js";

const router = Router();

router.route("/post").post(isAuthenticated, jobPost);
router.route("/get").get(isAuthenticated, getAllJob);
router.route("/getadminjobs").get(isAuthenticated, getJobbyAdmin);
router.route("/getbyid/:id").get(isAuthenticated, getJobById);

export default router;
