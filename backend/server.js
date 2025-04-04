import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("⚠ MongoDB connection error:", err));


  app.get('/', (req, res) =>{
    res.send("API is running...");
  });

  const PORT = process.env.PORT||5000
  app.listen(PORT , () => console.log(`✅ Server running on port ${process.env.PORT}`));
