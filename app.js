const express = require('express');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', studentRoutes);
module.exports = app;