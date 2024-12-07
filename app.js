const jwt = require('jsonwebtoken');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

const SECRET_KEY = 'your_secret_key';
const validCredentials = { username: 'Kieran', password: 'Kieran' };

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (username === validCredentials.username && password === validCredentials.password) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Middleware to protect routes
const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (token) {
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Example protected endpoint
app.get('/api/protected', authenticateJWT, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
