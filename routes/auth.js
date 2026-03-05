const express = require('express');
const router = express.Router();

// Mock user data (you can replace this with a real database)
const users = [];

// Register endpoint
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (users.find(user => user.username === username)) {
        return res.status(400).json({ message: 'User already exists' });
    }
    users.push({ username, password }); // Save user (replace with database logic)
    return res.status(201).json({ message: 'User registered successfully' });
});

// Login endpoint
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    return res.status(200).json({ message: 'Login successful' });
});

module.exports = router;