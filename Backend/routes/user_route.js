import { Router } from "express";
import {login, logout, register, updateProfile} from "../controllers/user.js"
import isAuthenticated from "../middleware/isAuthenticated.js";
import { singleUpload } from "../middleware/multer.js";
const router=Router()

router
.route("/register")
.post(singleUpload,register)

router
.route("/login")
.post(login)

router
.route("/logout")
.post(logout)

router
.route("/update_profile")
.put(isAuthenticated,updateProfile)

export default router