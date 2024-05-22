import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.route.js";
import dishRoutes from "./routes/dishes.route.js";
import restaurantRoutes from "./routes/restaurant.route.js";
import categoryRoutes from "./routes/category.route.js";

import cookieParser from "cookie-parser";
import path from "path";
dotenv.config();

mongoose
    .connect(process.env.MONGODB)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

const __dirname = path.resolve();
const app = express();

app.use(express.static(path.join(__dirname, "client", "dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
app.use(express.json());

app.use(cookieParser());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/dishes", dishRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/restaurant", restaurantRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

