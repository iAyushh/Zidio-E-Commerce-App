const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  avatar: String,
  bio: String
}, { timestamps: true });

modules.exports = mongoose.model("User", userSchema);
