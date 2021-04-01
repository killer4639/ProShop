import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const products = await Product.find({});
    res.json(products);
  })
);
router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      const error = new Error("Product not found");
      next(error);
    }
  })
);
export default router;
