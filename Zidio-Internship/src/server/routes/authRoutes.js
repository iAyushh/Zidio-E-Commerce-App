const express = require('express'); // Import the express module
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'; // Store in .env

// POST /api/auth/signup - Register a new user
router.post('/signup', async (req, res) => {
    try {
        const { username, email, password, avatar } = req.body;

        // Basic validation
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Name, email, and password are required.' });
        }

        // Check if user with this email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'Email address is already registered.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ username, email, password: hashedPassword, avatar });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully.' });
        // Optionally, you could generate and send a token here as well for immediate login
    } catch (error) {
        console.error('Error during signup:', error);
        let message = 'Signup failed.';
        if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
            message = 'Email address is already registered.';
        }
        res.status(500).json({ message });
    }
});

// POST /api/auth/login - Login an existing user
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Basic validation
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' }); // Adjust expiration as needed

        res.json({ token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Login failed.' });
    }
});

module.exports = router;