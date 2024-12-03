const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// MongoDB Connection
    mongoose
    .connect("mongodb://127.0.0.1:27017/abdul-1")
    .then(() => console.log("mongodb connected..."))
    .catch((err) => console.log("mongo error..", err));    

// Use Routes
app.use('/api/users', userRoutes);

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
