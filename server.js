const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// To parse form data (if using POST contact form later)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static(__dirname));

// Example API route for test
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from your backend!' });
});

// Send your portfolio HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
