const express = require('express');
const studentController = require('../controllers/studentController');
var api = express.Router();

api.post('/', studentController.create);

api.get('/', studentController.obtain);

api.put('/:id', studentController.update);

api.delete('/:id', studentController.eliminate);

module.exports = api;