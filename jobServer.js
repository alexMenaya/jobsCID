const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

// Middleware to serve static files
const cors = require('cors');
app.use(cors());

app.use(express.static(path.resolve(__dirname, 'job/build')));


// API route
app.get('/api/jobs', (req, res) => {
  res.json([
    { id: 1, title: 'Software Developer', location: 'Berlin' },
    { id: 2, title: 'Project Manager', location: 'Munich' },
    { id: 3, title: 'Truck Developer', location: 'Kiel' }
  ]);
});

// for non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'job/build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
