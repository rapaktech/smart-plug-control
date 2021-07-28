const express = require("express");
const routes = require('./app/routes/project.route');
const cors = require('cors');
require('dotenv').config();

// create express app
const app = express();

app.use(express.json());

app.use(routes);

app.use(cors());

app.use('/', express.static(__dirname + '/views'));

const port = process.env.PORT || 9005;

// listen for requests
app.listen(port, () => {
  console.log("Server has successfully started");
});