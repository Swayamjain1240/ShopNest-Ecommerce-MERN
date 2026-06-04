import express from "express"
import protect from "../middleware/authmiddleware.js"
import admin from "../middleware/adminmiddleware.js"
import getAdminStats from "../controller/analyticController.js";

const router = express.Router();

router.get("/", protect, admin, getAdminStats);

export default router ; 