require('./models/relationships');
const express = require('express');
const hostedByRoutes = require('./controllers/hostedByController/HostedByController');
const entireHouseRoutes = require('./controllers/entireHouseController/EntireHouseController');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.use('/api/hostedbyService', hostedByRoutes);
app.use('/api/hostedbyService', entireHouseRoutes);

module.exports = app;
