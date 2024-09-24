const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const serviceRoutes = require('./routes/services');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Log that the server is starting
console.log('Setting up routes...');
app.use('/api/services', serviceRoutes);

// Connect to MongoDB
console.log('Connecting to MongoDB...');
mongoose.connect(process.env.MONGODB_URI, { 
  //useNewUrlParser: true, useUnifiedTopology: true //
})
  .then(() => {
    console.log('Connected to MongoDB');
    const PORT = 5000; // Or change to another port if needed
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Add a health check route for testing
app.get('/health', (req, res) => {
  console.log('Health check received');
  res.status(200).send('Server is healthy');
});