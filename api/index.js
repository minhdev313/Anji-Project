import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.route.js";
import dishRoutes from "./routes/dishes.route.js";
import restaurantRoutes from "./routes/restaurant.route.js";
import categoryRoutes from "./routes/category.route.js";
import createPayment from "./routes/payment.route.js";
import cors from "cors";
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

const corsOptions = {
  origin: 'http://localhost:5173', // URL của frontend
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'X-Custom-Header'],
};

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/dishes", dishRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/restaurant", restaurantRoutes);
app.use("/api/payment", createPayment);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

// Serve static files only in production mode (optional)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "dist")));
}

// Catch-all route for client-side routing (optional)
app.get("*", (req, res) => {
  if (process.env.NODE_ENV === "production") {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
  } else {
    // Handle development environment routing (replace with your logic)
    res.send("Development environment routing");
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
