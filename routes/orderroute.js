import express from "express";
const orderRouter = express.Router();
import Order from "../models/ordermodel.js";
import authenticate from "../middleware/authenticate.js";

orderRouter.use(authenticate);

orderRouter.post("/", async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

orderRouter.get("/", async (req, res) => {
  const orders = await Order.find()
    .populate("user")
    .populate("products.product");
  res.json(orders);
});

export default orderRouter;
