import express from "express";
import admin from "../middleware/adminmiddleware.js";
import protect from "../middleware/authmiddleware.js";
import { createOrder, getOrders, myOrders, updateOrderStatus } from "../controller/orderController.js";
const router = express.Router()

router.post("/", protect, createOrder)
router.get("/", protect, admin, getOrders)
router.get("/myorders", protect, myOrders)
router.put("/:id/status", protect,admin, updateOrderStatus)

export default router