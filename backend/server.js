const express = require('express');
const mongoose = require('mongoose');
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

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

// Routes
app.use('/api/invoices', invoiceRoutes);
app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
