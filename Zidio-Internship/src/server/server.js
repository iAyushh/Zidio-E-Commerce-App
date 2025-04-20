require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Enable CORS for all origins (you might want to restrict this in production)
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Log the MongoDB URI for debugging purposes
console.log("MONGO_URI:", process.env.MONGO_URI);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("Mongo error:", err));

// Use your authentication routes
app.use("/api/auth", require("./routes/authRoutes"));

// Use your user-related routes
app.use("/api/user", require("./routes/userRoutes"));

// Define the port the server will listen on
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));