require('dotenv').config();
const express = require('express');
const app = express();

// Import routes
const notesRoutes = require('./routes/notes');

// Middleware
app.use(express.json()); // to parse JSON bodies

// Use notes routes
app.use('/api/notes', notesRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
