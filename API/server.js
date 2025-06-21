// server.js

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import userRouter from './routes/user.js';
import recipeRouter from './routes/recipe.js';

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// API Routes
app.use('/api', userRouter);
app.use('/api', recipeRouter);

// Connect to MongoDB using URI from .env
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB is Connected..!"))
  .catch((err) => console.error("❌ MongoDB connection error:", err.message));

// Use PORT from .env or fallback to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
