const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');

require('dotenv').config();

// Import routes
const invoiceRoutes = require('./routes/invoiceRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(bodyParser.json({ limit: '50mb' }));

// Middleware
app.use(express.json());
app.use(cors('*'));

// Connect to MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Routes
app.use('/api/invoices', invoiceRoutes);
app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
