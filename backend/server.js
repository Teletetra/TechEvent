const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors()); // Allows your React app on port 5173 to talk to this server on port 5000
app.use(express.json()); // Allows the server to accept JSON data in the body of requests

// Import Routes
const orderRoutes = require('./routes/orderRoutes');

// Mount Routes
app.use('/api/orders', orderRoutes);

// Basic route to test if server is running
app.get('/', (req, res) => {
  res.send('TechEvent API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});