require('./models/relationships');
const express = require('express');
const { join } = require('path');
const hostedByRoutes = require('./controllers/hostedByController/HostedByController');
const app = express();

app.use(express.static(join(__dirname, '..', 'frontend', 'dist')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV !== 'production')
    app.use(require('cors')({ origin: 'http://localhost:3000' }));

// ROUTES
app.use('/api/hostedby', hostedByRoutes);

module.exports = app;
