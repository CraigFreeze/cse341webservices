const routes = require('express').Router();
const controller = require('../controllers/index.js');

routes.get('/', controller.hello);

module.exports = routes;
