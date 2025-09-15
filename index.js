import express from "express";
import "./db.js";
import userRoute from "./routes/userroute.js";
import productRoute from "./routes/productroute.js";
import orderRoute from "./routes/orderroute.js";

const app = express();
app.use(express.json());

app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/orders", orderRoute);

app.listen(process.env.PORT || 3001, () => {
  console.log("Server is running on port", process.env.PORT || 3001);
});
