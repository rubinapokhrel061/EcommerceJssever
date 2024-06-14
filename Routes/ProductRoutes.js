import express from "express";
import { isAdmin, requireSignIn } from "../Middlewares/AuthMiddleware.js";
import {
  categoryWiseProductController,
  createProductController,
  deleteProductController,
  getAllProductControlller,
  getProductPhotoController,
  getSingleProductController,
  productCountController,
  productFilterController,
  productListController,
  realtedProductController,
  searchProductController,
  updateProductController,
} from "../Controllers/productController.js";
import formidable from "express-formidable";
//router object
const router = express.Router();

// Create Product

router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
// Update Product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// get All Product
router.get("/get-All-product", getAllProductControlller);

// single All Product
router.get("/get-single-product/:slug", getSingleProductController);
//get product Photo
router.get("/get-product-photo/:pid", getProductPhotoController);

// //delete Product
router.delete("/delete-product/:pid", deleteProductController);

//filter products
router.post("/filter-product", productFilterController);

//count -product
router.get("/count-product", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search-product/:keyword", searchProductController);

//related product
router.get("/related-product/:pid/:cid", realtedProductController);

//Category wise product
router.get("/category-wise-product/:slug", categoryWiseProductController);

export default router;
