const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);
});

router.put("/me", auth, async (req, res) => {
  const updates = req.body;
  const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true });
  res.json(user);
});

router.get("/avatars", (req, res) => {
  const avatars = ["ironman.png", "thor.png", "blackwidow.png"];
  res.json(avatars);
});

module.exports = router;
