import express from "express";
import protect from "../middleware/authmiddleware.js";
import admin from "../middleware/adminmiddleware.js";
import multer from "multer"
import {getProducts, createProducts, getProductById, updateProduct, deleteProduct} from "../controller/productController.js"


const upload = multer({ dest: 'uploads/' });

const router = express.Router()

router.get("/", getProducts);
router.post("/", protect, admin, upload.single('image'), createProducts);
router.get("/:id", getProductById);
router.put("/:id", protect, admin, upload.single('image'), updateProduct);
router.delete("/:id", protect, admin, deleteProduct);

export default router;