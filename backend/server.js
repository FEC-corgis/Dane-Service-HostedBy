require('./models/relationships');
const express = require('express');
const { join } = require('path');
const hostedByRoutes = require('./controllers/hostedByController/HostedByController');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(join(__dirname, '..', 'frontend', 'dist')));

// ROUTES
app.use('/api/hostedbyService', hostedByRoutes);

module.exports = app;
