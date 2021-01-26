require('./models/relationships');
const express = require('express');
const { join } = require('path');
const hostedByRoutes = require('./controllers/hostedByController/HostedBy');
const app = express();

app.use(express.static(join(__dirname, '..', 'frontend', 'dist')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.use('/api/hostedby', hostedByRoutes);

module.exports = app;
