import express from "express";
import { isAdmin, requireSignIn } from "../Middlewares/AuthMiddleware.js";

import {
  categoryControlller,
  createCategoryController,
  deleteCategoryCOntroller,
  singleCategoryController,
  updateCategoryController,
} from "../Controllers/CategoryController.js";
//router object
const router = express.Router();

// routing
// Create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);
// Update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// get All category
router.get("/all-category", categoryControlller);

// single All category
router.get("/single-category/:slug", singleCategoryController);
//delete category
router.delete("/delete-category/:id", deleteCategoryCOntroller);
export default router;
