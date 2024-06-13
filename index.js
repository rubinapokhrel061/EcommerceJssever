import express from "express";
import AuthRoutes from "./Routes/AuthRoutes.js";
import connectToDatabase from "./Config/Database.js";
import ProductRoutes from "./Routes/ProductRoutes.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import CategoryRoutes from "./Routes/CategoryRoutes.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;
connectToDatabase();
// app.get("/", (req, res) => {
//   res.send(message:"success");
// });

app.use("/auth", AuthRoutes);
app.use("/category", CategoryRoutes);
app.use("/product", ProductRoutes);

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
