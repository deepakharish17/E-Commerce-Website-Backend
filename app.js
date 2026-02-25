const express = require('express');
const app = express();
const cors = require('cors');
const connectDatabase = require('./config/connectDatabase');
require('dotenv').config();

const products = require('./routes/product');

connectDatabase();

app.use(cors());
app.use(express.json());

// Mount routes correctly
app.use('/api/v1', products);

// Test route
app.get('/', (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
