const express = require('express');
const { celebrate , Joi, Segments} = require('celebrate')

const userController = require('./controllers/UsersController');
const eventsController = require('./controllers/EventsController');
const productsController = require('./controllers/ProductsController');


const routes = express.Router();



module.exports = routes;