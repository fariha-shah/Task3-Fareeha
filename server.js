// ============================================
// UniFind — Project 3 Server with Database
// ============================================

const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

const app = express();
const PORT = 4000;

// Database connect karo
connectDB();

// Middleware
app.use(cors());
// Uploads folder publicly accessible
app.use('/uploads', express.static('uploads'));
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({
    message: 'UniFind API with Database is running!',
    status: 'OK',
  });
});

// Routes
const itemsRoute = require('./routes/items');
const authRoute = require('./routes/auth');

app.use('/api/items', itemsRoute);
const messagesRoute = require('./routes/messages');
app.use('/api/messages', messagesRoute);
const claimsRoute = require('./routes/claims');
app.use('/api/claims', claimsRoute);
app.use('/api/auth', authRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
