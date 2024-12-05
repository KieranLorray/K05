const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Hardcoded credentials
const username = "Kieran";
const password = "Kieran";

// Secret key for JWT
const SECRET_KEY = "your_jwt_secret_key";

router.post('/login', (req, res) => {
    const { login, pass } = req.body;

    // Validate credentials
    if (login === username && pass === password) {
        // Generate JWT
        const token = jwt.sign({ username: login }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ success: true, token });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

// Export the router
module.exports = router;
