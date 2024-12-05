const mysql = require('mysql2');

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yourpassword', // Update with your MySQL password
    database: 'generative_ai'
});

// API endpoint for chart data
app.get('/api/chart-data', (req, res) => {
    const query = 'SELECT category, percentage FROM applications';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Server error');
        } else {
            res.json(results);
        }
    });
});
