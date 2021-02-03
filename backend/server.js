require('./models/relationships');
const express = require('express');
const hostedByRoutes = require('./controllers/hostedByController/HostedByController');
const entireHouseRoutes = require('./controllers/entireHouseController/EntireHouseController');
const morePlaces = require('./controllers/morePlaces/MorePlaces');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.use('/api/hostedbyService', hostedByRoutes);
app.use('/api/hostedbyService', entireHouseRoutes);
app.use('/api/hostedbyService', morePlaces);

module.exports = app;
