const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the "static" folder
app.use(express.static(path.join(__dirname, 'static')));

// Serve HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/all', (req, res) => {
  res.sendFile(path.join(__dirname, 'all.html'));
});

app.get('/search', (req, res) => {
  res.sendFile(path.join(__dirname, 'search.html'));
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
