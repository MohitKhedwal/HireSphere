import express from "express";
import { Router } from "express";
import { getCompany, getCompanyByID, registerCompany, updateCompany } from "../controllers/company.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router=Router()

router
.route("/register")
.post(isAuthenticated,registerCompany)

router
.route("/get")
.get(isAuthenticated,getCompany)

router
.route("/getbyid/:id")
.get(isAuthenticated,getCompanyByID)

router
.route("/update/:id")
.put(isAuthenticated,updateCompany)

export default router