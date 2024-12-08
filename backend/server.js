import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import productrouts from "./routes/product.route.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const _dirname = path.resolve();
const app = express();
app.use(express.json());
app.use("/api/products", productrouts); //allows us to accept json data in req.body
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
