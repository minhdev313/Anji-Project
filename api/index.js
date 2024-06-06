import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.route.js";
import dishRoutes from "./routes/dishes.route.js";
import restaurantRoutes from "./routes/restaurant.route.js";
import categoryRoutes from "./routes/category.route.js";
import path from "path";
import PayOS from "@payos/node";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

const payOS = new PayOS(process.env.PAYOS_CLIENT_ID, process.env.PAYOS_API_KEY, process.env.PAYOS_CHECKSUM_KEY);
// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
// Routes
app.use('/payment', express.static('public'));
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/dishes", dishRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/restaurant", restaurantRoutes);

app.post('/create-payment-link', async (req, res) => {
    const body = {
        orderCode: Number(String(Date.now()).slice(-6)),
        amount: 25000,
        description: 'Thanh toan don hang',
        returnUrl: `localhost/success.html`,
        cancelUrl: `localhost/cancel.html`
    };

    try {
        const paymentLinkResponse = await payOS.createPaymentLink(body);
        res.redirect(paymentLinkResponse.checkoutUrl);  
    } catch (error) {
        console.error(error);
        res.send('Something went error');
    }
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

// Serve static files
app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist'));
});

// Start server
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
