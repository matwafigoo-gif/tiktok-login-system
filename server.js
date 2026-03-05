'use strict';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = 'your_mongodb_connection_string'; // Replace this with your MongoDB connection string

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Simple route
app.get('/', (req, res) => {
  res.send('Welcome to the TikTok Login System API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
