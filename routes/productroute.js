import express from "express";
const productRouter = express.Router();
import Product from "../models/productmodel.js";

productRouter.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

productRouter.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});
export default productRouter;
