const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const path = require('path'); 
const app = express();

//Connect to mongodb
mongoose.connect('mongodb://localhost:27017/f-shop')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Sử dụng express.json() để phân tích cú pháp dữ liệu JSON từ request body
app.use(express.json());

// Sử dụng express.urlencoded() để phân tích cú pháp dữ liệu từ request body dưới dạng application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//Configure the static serving
const buildPath = path.join(__dirname, '../frontend/build');
app.use(express.static(buildPath));
console.log(`Static files are served from: ${buildPath}`);

const srcPath = path.join(__dirname, '../frontend');
app.use(express.static(srcPath));
console.log(`Static files are served from: ${srcPath}`);

// Attach the router to the main application. 
// Ensure that API routes are defined before configuring the catch-all route.
app.use('/api', routes);

// Handle all requests and redirect to index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

module.exports = app;